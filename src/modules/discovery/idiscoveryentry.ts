interface IDiscoveryEntry {
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

interface IAddress {
  network: string;
  address: string;
}

interface IDiscoveryScan {
  created: Date;
  hash: string;
  entries: IDiscoveryEntry[];
}

interface IDiscoveryAgent {
  scan(): Promise<IDiscoveryScan>;
}

export { IAddress, IDiscoveryEntry, IDiscoveryAgent, IDiscoveryScan };
