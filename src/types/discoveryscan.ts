import { DiscoveryEntry } from "@customtypes/discoveryentry";

/**
 * Represents results of a service scan
 */
class DiscoveryScan {
  /**
   * Scan date time
   */
  public created: Date;

  /**
   * Collection md5 hash
   */
  public hash: string;

  /**
   * Scan results
   */
  public entries: DiscoveryEntry[];

  constructor() {
    this.created = new Date();
    this.hash = "";
    this.entries = [];
  }
}

export { DiscoveryScan };
