import { createHash } from "node:crypto";

import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");
import { Address } from "@customtypes/address";
import { DiscoveryEntry } from "@customtypes/discoveryentry";
import { DiscoveryScan } from "@customtypes/discoveryscan";
import { IDiscoveryAgent } from "@customtypes/idiscoveryagent";
import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { IpUtilities } from "@helpers/iputilities";
import { DockerService } from "@services/docker.service";

/**
 * Docker service discovery
 */
@Injectable()
export class DockerDiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(DockerDiscoveryService.name);

  constructor(
    private dockerService: DockerService,
    private configService: ConfigService,
  ) {}

  /**
   * Performs a docker discovery container scan and returns the results
   */
  public scan(): Promise<ServiceDefinitionList> {
    return new Promise<ServiceDefinitionList>((resolve, reject) => {
      this.internalScan()
        .then((results) => {
          const services = ServiceDefinitionList.fromDiscoveryScan(results);
          resolve(services);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public internalScan(): Promise<DiscoveryScan> {
    return new Promise<DiscoveryScan>((resolve, reject) => {
      if (!this.configService.get("discovery.docker.enabled")) {
        this.logger.warn("Skipping Docker based discovery");
        reject();
        return;
      }
      const result = new DiscoveryScan();
      const docker = this.dockerService.createDocker();
      docker.listContainers({ all: true, size: false }, (err, containers) => {
        if (err) {
          reject(err);
        } else {
          const promises: Promise<any>[] = [];

          containers.forEach((container) => {
            promises.push(this.dockerService.getContainer(container.Id));
          });

          Promise.allSettled(promises).then((results) => {
            const addressPromises: Promise<DiscoveryEntry>[] = [];

            results.forEach((promise) => {
              if (promise.status == "fulfilled") {
                const container = promise.value;
                const networkMode = container.HostConfig.NetworkMode;
                const record: DiscoveryEntry = {
                  name: container.Config.Labels["homepage.name"],
                  containerName: container.Name,
                  hostname: container.Config.Hostname,
                  iconSlug: "",
                  available: container.available,
                  ports: this.resolvePorts(container.Config.ExposedPorts),
                  sourceAddress: { network: "", address: "", preferred: false },
                  targetAddress: container.Config.Labels["homepage.href"],
                  ipAddresses: this.resolveNetworks(
                    container.NetworkSettings,
                    container.HostConfig.NetworkMode,
                  ),
                };

                if (
                  container.Config.Labels["com.guidcruncher.discovrninja.title"]
                ) {
                  record.name =
                    container.Config.Labels[
                      "com.guidcruncher.discovrninja.title"
                    ];
                }

                if (
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.icon_slug"
                  ]
                ) {
                  record.iconSlug =
                    container.Config.Labels[
                      "com.guidcruncher.discovrninja.icon_slug"
                    ];
                }

                if (
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.public"
                  ]
                ) {
                  record.targetAddress =
                    container.Config.Labels[
                      "com.guidcruncher.discovrninja.public"
                    ];
                }

                if (container.Config.Labels["homepage.targetaddress"]) {
                  record.targetAddress =
                    container.Config.Labels["homepage.targetaddress"];
                }

                if (
                  container.Config.Labels["com.guidcruncher.discovrninja.proxy"]
                ) {
                  record.sourceAddress.address =
                    container.Config.Labels[
                      "com.guidcruncher.discovrninja.proxy"
                    ];
                  record.sourceAddress.preferred = true;
                  result.entries.push(record);
                } else {
                  if (networkMode.startsWith("container:")) {
                    const containerId: string = networkMode.split(":")[1];
                    const parentContainer = results
                      .filter((a) => a.status == "fulfilled")
                      .map((b) => b.value)
                      .find((c) => c.Id == containerId);
                    record.ipAddresses = this.resolveNetworks(
                      parentContainer.NetworkSettings,
                      parentContainer.HostConfig.NetworkMode,
                    );
                    addressPromises.push(
                      this.resolveSourceAddress(record, parentContainer),
                    );
                  } else {
                    addressPromises.push(
                      this.resolveSourceAddress(record, container),
                    );
                  }
                }
              }
            });

            Promise.allSettled(addressPromises).then((results) => {
              const fulfilled = results.filter(
                (res) => res.status === "fulfilled",
              ) as PromiseFulfilledResult<DiscoveryEntry>[];

              fulfilled.forEach((value) => {
                result.entries.push(value.value);
              });

              result.entries.sort((a, b) =>
                a.containerName.localeCompare(b.containerName),
              );

              result.hash = createHash("sha256")
                .update(JSON.stringify(result.entries))
                .digest("base64");
              resolve(result);
            });
          });
        }
      });
    });
  }

  private getScheme(port: string): string {
    if (port == "443") {
      return "https:";
    }
    return "http:";
  }

  private resolveSourceAddress(
    entry: DiscoveryEntry,
    container: any,
  ): Promise<DiscoveryEntry> {
    const iputils: IpUtilities = new IpUtilities();
    const networks = this.resolveNetworks(
      container.NetworkSettings,
      container.HostConfig.NetworkMode,
    );

    return new Promise<DiscoveryEntry>((resolve, reject) => {
      const hostIpAddress = iputils.getHostIpAddress();
      const result: DiscoveryEntry = entry;
      if (entry.ports.length == 0) {
        resolve(result);
      }

      const promises: Promise<Address>[] = [];
      const preferredNetwork = networks.find((n) => n.preferred);
      entry.ports.forEach((port) => {
        entry.ipAddresses.forEach((addr) => {
          if (addr.preferred || !preferredNetwork) {
            const url: Address = {
              preferred: addr.preferred,
              address: "",
              network: addr.network,
            };
            const scheme: string = this.getScheme(port);
            if (addr.address == "") {
              addr.address = hostIpAddress;
            }

            if (scheme == "http:") {
              url.address = "http://" + addr.address + ":" + port;
              promises.push(iputils.checkUrlLive(url));
            } else {
              url.address = scheme + "//" + addr.address + ":" + port;
              promises.push(iputils.checkUrlLive(url));
            }
          }
        });
      });

      Promise.any(promises)
        .then((result) => {
          entry.sourceAddress = result;
          if (result.network != "host") {
            const uri = new URL(result.address);
            entry.sourceAddress.address =
              uri.protocol +
              "//" +
              entry.hostname +
              (uri.port == "" ? "" : ":" + uri.port);
          }
          resolve(entry);
        })
        .catch(() => {
          entry.sourceAddress.address = "";
          entry.sourceAddress.network = "";
          resolve(entry);
        });
    });
  }

  private resolveNetworks(
    networksettings: any,
    networkMode: string,
  ): Address[] {
    const results: Address[] = [];
    const iputils: IpUtilities = new IpUtilities();

    for (const key of Object.keys(networksettings.Networks)) {
      const network: any =
        networksettings.Networks[key as keyof typeof networksettings.Networks];
      const address: Address = {
        preferred: networkMode == network.NetworkID,
        network: key as string,
        address: network.IPAddress,
      };
      if (key == "host") {
        address.preferred = true;
        address.address = iputils.getHostIpAddress();
      }
      results.push(address);
    }
    return results;
  }

  private resolvePorts(ports: any): string[] {
    const results: string[] = [];
    if (ports) {
      Object.keys(ports).forEach((key) => {
        if (!key.includes("udp")) {
          const currentPort = key.replace("/tcp", "");
          if (!results.includes(currentPort)) {
            results.push(currentPort);
          }
        }
      });
    }
    return results;
  }
}
