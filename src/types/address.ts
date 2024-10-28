export class Address {
  public network: string;
  public address: string;
  public preferred: boolean;

  constructor() {
    this.network = "";
    this.address = "";
    this.preferred = false;
  }
}
