import { createHash } from "node:crypto";
import Docker from "dockerode";
import { DiscoveryEntry } from "@discovery/discoveryentry";
import { DiscoveryScan } from "@discovery/discoveryscan";
import { IAddress, IpUtilities } from "@dns/iputilities";
import {
  IDiscoveryAgent,
  IDiscoveryEntry,
  IDiscoveryScan,
} from "@discovery/idiscoveryentry";

export class DockerDiscoveryAgent implements IDiscoveryAgent {
  public scan(): Promise<IDiscoveryScan> {
    return new Promise<IDiscoveryScan>((resolve, reject) => {
      const result = new DiscoveryScan();
      const docker = this.createDocker();
      docker.listContainers((err, containers) => {
        if (err) {
          reject(err);
        } else {
          const promises: Promise<any>[] = [];

          containers.forEach((container) => {
            promises.push(this.getContainer(container.Id));
          });

          Promise.allSettled(promises).then((results) => {
            const addressPromises: Promise<DiscoveryEntry>[] = [];

            results.forEach((promise) => {
              if (promise.status == "fulfilled") {
                const container = promise.value;
                const record: DiscoveryEntry = {
                  name: container.Config.Labels["homepage.name"],
                  description: container.Config.Labels["homepage.description"],
                  icon: container.Config.Labels["homepage.icon"],
                  containerName: container.Name,
                  hostname: container.Config.Hostname,
                  ports: this.resolvePorts(container.Config.ExposedPorts),
                  sourceAddress: { network: "", address: "" },
                  targetAddress: container.Config.Labels["homepage.href"],
                  ipAddresses: this.resolveNetworks(container.NetworkSettings),
                };

                if (container.Config.Labels["homepage.targetaddress"]) {
                  record.targetAddress =
                    container.Config.Labels["homepage.targetaddress"];
                }

                if (container.Config.Labels["homepage.sourceaddress"]) {
                  record.sourceAddress.address =
                    container.Config.Labels["homepage.sourceaddress"];
                  result.entries.push(record);
                } else {
                  addressPromises.push(this.resolveSourceAddress(record));
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

  private resolveSourceAddress(entry: DiscoveryEntry): Promise<DiscoveryEntry> {
    const iputils: IpUtilities = new IpUtilities();
    return new Promise<DiscoveryEntry>((resolve, reject) => {
      const hostIpAddress = iputils.getHostIpAddress();

      const result: DiscoveryEntry = entry;
      if (entry.ports.length == 0) {
        resolve(result);
      }

      const promises: Promise<IAddress>[] = [];

      entry.ports.forEach((port) => {
        entry.ipAddresses.forEach((addr) => {
          const url: IAddress = { address: "", network: addr.network };
          const scheme: string = this.getScheme(port);

          if (addr.address == "") {
            addr.address = hostIpAddress;
          }

          if (scheme == "http:") {
            url.address = "http://" + addr.address + ":" + port;
            promises.push(iputils.checkUrlLive(url));
            url.address = "https://" + addr.address + ":" + port;
            promises.push(iputils.checkUrlLive(url));
          } else {
            url.address = scheme + "//" + addr.address + ":" + port;
            promises.push(iputils.checkUrlLive(url));
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

  private resolveNetworks(networksettings: any): IAddress[] {
    const results: IAddress[] = [];
    const iputils: IpUtilities = new IpUtilities();

    for (const key of Object.keys(networksettings.Networks)) {
      const network: any =
        networksettings.Networks[key as keyof typeof networksettings.Networks];
      const address: IAddress = {
        network: key as string,
        address: network.IPAddress,
      };
      if (key == "host") {
        address.address = iputils.getHostIpAddress();
      }
      results.push(address);
    }
    return results;
  }

  private resolvePorts(ports: any): string[] {
    const results: string[] = [];
    Object.keys(ports).forEach((key) => {
      if (!key.includes("udp")) {
        const currentPort = key.replace("/tcp", "");
        if (!results.includes(currentPort)) {
          results.push(currentPort);
        }
      }
    });
    return results;
  }

  private getContainer(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.createDocker();
      const container = docker.getContainer(id);
      container.inspect(function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  private createDocker(): Docker {
    return new Docker({ socketPath: "/var/run/docker.sock" });
  }
}
