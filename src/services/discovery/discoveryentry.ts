import { IDiscoveryEntry } from "./idiscoveryentry";

export class DiscoveryEntry implements IDiscoveryEntry {
  public name: string;

  public description: string;

  public icon: string;

  public sourceAddress: string;

  public targetAddress: string;

  public containerName: string;

  public hostname: string;

  constructor() {
    this.name = "";
    this.description = "";
    this.icon = "";
    this.sourceAddress = "";
    this.targetAddress = "";
    this.containerName = "";
    this.hostname = "";
  }
}
