interface IDiscoveryEntry {
  name: string;
  description: string;
  icon: string;
  hostname: string;
  containerName: string;
  sourceAddress: string;
  targetAddress: string;
  ports: string[];
  ipAddresses: IIpAddress[];
}

interface IIpAddress {
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

export { IIpAddress, IDiscoveryEntry, IDiscoveryAgent, IDiscoveryScan };
