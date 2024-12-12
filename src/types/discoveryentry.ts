import { Address } from "@customtypes/address";

/**
 * Represents results of a service scan
 */
class DiscoveryEntry {
  /**
   * Name
   */
  public name: string;

  /**
   * Container IP address
   */
  public sourceAddress: Address;

  /**
   * Proxy target host
   */
  public targetAddress: string;

  public iconSlug: string;

  /**
   * Container Name
   */
  public containerName: string;

  /**
   * Container Host Name
   */
  public hostname: string;

  /**
   * Exposed ports
   */
  public ports: string[];

  /**
   * Container IP Addresses
   */
  public ipAddresses: Address[];

  public available: boolean;

  constructor() {
    this.available = false;
    this.name = "";
    this.ports = [];
    this.sourceAddress = { network: "", address: "", preferred: false };
    this.targetAddress = "";
    this.containerName = "";
    this.hostname = "";
    this.ipAddresses = [];
  }
}

export { DiscoveryEntry };
