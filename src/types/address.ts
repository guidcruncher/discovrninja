/**
 * Represents a network address
 */
class Address {
  /**
   * The network name
   */
  public network: string;

  /**
   * The address or hostname
   */
  public address: string;

  /**
   * Indicates if this is the preferred address for access
   */
  public preferred: boolean;

  constructor() {
    this.network = "";
    this.address = "";
    this.preferred = false;
  }
}

export { Address };
