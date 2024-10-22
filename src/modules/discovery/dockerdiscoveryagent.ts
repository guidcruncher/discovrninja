import Docker from "dockerode";
import { DiscoveryEntry } from "discovery/discoveryentry";
import { DiscoveryScan } from "discovery/discoveryscan";
import {
  IDiscoveryAgent,
  IDiscoveryEntry,
  IDiscoveryScan,
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
                };
                result.entries.push(record);
              }
            });
            resolve(result);
          });
        }
      });
    });
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
