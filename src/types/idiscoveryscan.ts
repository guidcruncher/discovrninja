impoert { IDiscoveryEntry } from "@types/idiscoveryentry";

export interface IDiscoveryScan {
  created: Date;
  hash: string;
  entries: IDiscoveryEntry[];
}
