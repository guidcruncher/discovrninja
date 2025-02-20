import { CryptoHelper } from "@helpers/cryptohelper";
import { DockerConnectorService } from "@container/docker-connector.service";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");
import { DockerService } from "@container/docker.service";
import { Address } from "@customtypes/address";
import { IDiscoveryAgent } from "./idiscoveryagent";
import { ServiceDefinition } from "@data/dto/servicedefinition.dto";
import { IpUtilities } from "@helpers/iputilities";

/**
 * Docker service discovery
 */
@Injectable()
export class DockerDiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(DockerDiscoveryService.name);

  constructor(
    private dockerService: DockerService,
    private configService: ConfigService,
    private readonly connectorService: DockerConnectorService,
  ) {}

  /**
   * Performs a docker discovery container scan and returns the results
   */
  public scan(): Promise<ServiceDefinition[]> {
    return new Promise<ServiceDefinition[]>((resolve, reject) => {
      if (!this.configService.get("discovery.docker.enabled")) {
        this.logger.warn("Skipping Docker based discovery");
        reject();
        return;
      }

      const docker = this.connectorService.createDocker();
      docker.listContainers({ all: true, size: false }, (err, containers) => {
        if (err) {
          this.logger.error("Error in docker discovery scan", err);
          reject(err);
          return;
        }
        let defs: ServiceDefinition[] = [];
        const promises: Promise<any>[] = [];

        containers.forEach((container) => {
          promises.push(this.dockerService.getContainer(container.Id));
        });

        Promise.allSettled(promises).then((results) => {
          const addressPromises: Promise<ServiceDefinition>[] = [];

          results.forEach((promise) => {
            if (promise.status == "fulfilled") {
              const container = promise.value;
              const networkMode = container.HostConfig.NetworkMode;
              let sd: ServiceDefinition = new ServiceDefinition();
              sd.name = container.Config.Labels["homepage.name"] ?? "";
              sd.iconSlug == "";
              sd.iconCatalog = "";
              sd.containerName = container.Name;
              sd.hostname = container.Config.Hostname;
              sd.ipaddress = "";
              sd.proxy = "";
              sd.public = container.Config.Labels["homepage.href"] ?? "";
              sd.project =
                container.Config.Labels["com.docker.compose.project"] ?? "";
              sd.available = container.available;

              if (
                container.Config.Labels["com.guidcruncher.discovrninja.title"]
              ) {
                sd.name =
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.title"
                  ];
              }

              if (
                container.Config.Labels[
                  "com.guidcruncher.discovrninja.icon_slug"
                ]
              ) {
                sd.iconSlug =
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.icon_slug"
                  ];
              }

              if (
                container.Config.Labels[
                  "com.guidcruncher.discovrninja.icon_catalog"
                ]
              ) {
                sd.iconCatalog =
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.icon_catalog"
                  ];
              }

              if (
                container.Config.Labels["com.guidcruncher.discovrninja.public"]
              ) {
                sd.public =
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.public"
                  ];
              }

              if (container.Config.Labels["homepage.targetaddress"]) {
                sd.public = container.Config.Labels["homepage.targetaddress"];
              }

              if (
                container.Config.Labels["com.guidcruncher.discovrninja.proxy"]
              ) {
                sd.proxy =
                  container.Config.Labels[
                    "com.guidcruncher.discovrninja.proxy"
                  ];
              } else {
                sd.proxy = "http://" + sd.hostname;
              }

              const networks = this.resolveNetworks(
                container.NetworkSettings,
                container.HostConfig.NetworkMode,
              );
              sd.ipaddresses = networks.map((n) => {
                return n.address;
              });
              if (sd.ipaddresses.length > 0) {
                sd.ipaddress = sd.ipaddresses[0];
              }

              defs.push(sd);
            }
          });
          defs = defs.sort((a, b) => {
            return a.containerName.localeCompare(b.containerName);
          });
          resolve(defs);
        });
      });
    });
  }

  private getScheme(port: string): string {
    if (port == "443") {
      return "https:";
    }
    return "http:";
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
}
