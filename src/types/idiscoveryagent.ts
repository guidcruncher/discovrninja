import { IDiscoveryScan } from "@types/idiscoveryscan";

export interface IDiscoveryAgent {
  scan(): Promise<IDiscoveryScan>;
}
