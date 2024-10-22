import { IDiscoveryEntry, IDiscoveryScan } from "./idiscoveryentry";

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
