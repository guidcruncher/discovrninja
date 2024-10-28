import { DiscoveryEntry } from "@types/discoveryentry";

export class DiscoveryScan {
  public created: Date;

  public hash: string;

  public entries: DiscoveryEntry[];

  constructor() {
    this.created = new Date();
    this.hash = "";
    this.entries = [];
  }
}
