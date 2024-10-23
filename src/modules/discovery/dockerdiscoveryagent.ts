import { createHash } from "node:crypto";
import Docker from "dockerode";
import { DiscoveryEntry } from "discovery/discoveryentry";
import { DiscoveryScan } from "discovery/discoveryscan";
import {
  IDiscoveryAgent,
  IDiscoveryEntry,
  IDiscoveryScan,
  IIpAddress,
} from "discovery/idiscoveryentry";

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
            results.forEach((promise) => {
              if (promise.status == "fulfilled") {
                const container = promise.value;
                const record: IDiscoveryEntry = {
                  name: container.Config.Labels["homepage.name"],
                  description: container.Config.Labels["homepage.description"],
                  icon: container.Config.Labels["homepage.icon"],
                  containerName: container.Name,
                  hostname: container.Config.Hostname,
                  ports: this.resolvePorts(container.Config.ExposedPorts),
                  sourceAddress: container.Config.Hostname,
                  targetAddress: container.Config.Labels["homepage.href"],
                  ipAddresses: this.resolveNetworks(container.NetworkSettings),
                };
                record.sourceAddress = this.resolveSourceAddress(
                  record.hostname,
                  record.ports,
                );
                result.entries.push(record);
              }
            });
            result.entries.sort((a, b) =>
              a.containerName.localeCompare(b.containerName),
            );
            result.hash = createHash("sha256")
              .update(JSON.stringify(result.entries))
              .digest("base64");
            resolve(result);
          });
        }
      });
    });
  }

  private getScheme(port: string): string {
    if (port == "443") {
      return "https://";
    }
    return "http://";
  }

  private resolveSourceAddress(hostname: string, ports: string[]): string {
    if (ports.length == 0) {
      return "";
    }
    if (ports.length == 1) {
      return this.getScheme(ports[0]) + hostname + ":" + ports[0];
    }
    return "";
  }

  private resolveNetworks(networksettings: any): IIpAddress[] {
    const results: IIpAddress[] = [];

    for (const key of Object.keys(networksettings.Networks)) {
      const network: any =
        networksettings.Networks[key as keyof typeof networksettings.Networks];
      const address: IIpAddress = {
        network: key as string,
        address: network.IPAddress,
      };
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
