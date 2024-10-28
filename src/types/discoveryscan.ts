import { DiscoveryEntry } from "@customtypes/discoveryentry";

class DiscoveryScan {
  public created: Date;

  public hash: string;

  public entries: DiscoveryEntry[];

  constructor() {
    this.created = new Date();
    this.hash = "";
    this.entries = [];
  }
}

export { DiscoveryScan };
