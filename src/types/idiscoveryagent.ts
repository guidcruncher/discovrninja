import { DiscoveryScan } from "@customtypes/discoveryscan";

interface IDiscoveryAgent {
  scan(): Promise<DiscoveryScan>;
}

export { IDiscoveryAgent };
