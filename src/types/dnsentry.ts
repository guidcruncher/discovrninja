/**
 * Represents a DNS Entry
 */
class DnsEntry {
  /**
   * DNS Host Name
   */
  public host: string;

  /**
   * DNS Record type
   */
  public type: string;

  /**
   * DNS record data
   */
  public data: string;

  constructor() {
    this.host = "";
    this.type = "";
    this.data = "";
  }
}

export { DnsEntry };
