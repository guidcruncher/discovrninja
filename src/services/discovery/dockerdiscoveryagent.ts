import { Docker } from "dockerode";
import { DiscoveryEntry } from "./discoveryentry";
import { DiscoveryScan } from "./discoveryscan";
import {
  IDiscoveryAgent,
  IDiscoveryEntry,
  IDiscoveryScan,
} from "./idiscoveryentry";

export class DockerDiscoveryAgent implements IDiscoveryAgent {
  public scan(): Promise<IDiscoveryScan> {
    return new Promise<IDiscoveryScan>((resolve, reject) => {
      const result = new DiscoveryScan();
      const docker = this.createDocker();
      docker.listContainers((err, containers) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  private createDocker(): Docker {
    return new Docker({ socketPath: "/var/run/docker.sock" });
  }
}
