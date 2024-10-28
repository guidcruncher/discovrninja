import { Address } from "@customtypes/address";

class DiscoveryEntry {
  public name: string;

  public description: string;

  public icon: string;

  public sourceAddress: Address;

  public targetAddress: string;

  public containerName: string;

  public hostname: string;

  public ports: string[];

  public ipAddresses: Address[];

  constructor() {
    this.name = "";
    this.description = "";
    this.icon = "";
    this.ports = [];
    this.sourceAddress = { network: "", address: "", preferred: false };
    this.targetAddress = "";
    this.containerName = "";
    this.hostname = "";
    this.ipAddresses = [];
  }
}

export { DiscoveryEntry };
