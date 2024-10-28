import { DiscoveryScan } from "@types/discoveryscan";

interface IDiscoveryAgent {
  scan(): Promise<DiscoveryScan>;
}

export { IDiscoveryAgent };
