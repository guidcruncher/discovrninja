import { IDiscoveryEntry } from "@types/idiscoveryentry";
import { IAddress } from "@types/iaddress";

export class DiscoveryEntry implements IDiscoveryEntry {
  public name: string;
  public description: string;
  public icon: string;
  public sourceAddress: IAddress;
  public targetAddress: string;
  public containerName: string;
  public hostname: string;
  public ports: string[];
  public ipAddresses: IAddress[];
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
