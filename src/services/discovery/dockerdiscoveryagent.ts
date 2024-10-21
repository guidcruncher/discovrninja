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
      resolve(result);
    });
  }
}
