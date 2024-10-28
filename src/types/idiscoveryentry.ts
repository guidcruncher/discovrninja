import IAddress from "@types/iaddress";

export interface IDiscoveryEntry {
  name: string;
  description: string;
  icon: string;
  hostname: string;
  containerName: string;
  sourceAddress: IAddress;
  targetAddress: string;
  ports: string[];
  ipAddresses: IAddress[];
}
