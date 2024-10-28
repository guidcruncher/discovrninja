import { IDiscoveryEntry } from "@types/idiscoveryentry";
import { IDiscoveryScan } from "@types/idiscoveryscan";

export class DiscoveryScan implements IDiscoveryScan {
  public created: Date;
  public hash: string;
  public entries: IDiscoveryEntry[];
  constructor() {
    this.created = new Date();
    this.hash = "";
    this.entries = [];
  }
}
