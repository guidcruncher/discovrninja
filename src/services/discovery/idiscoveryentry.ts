interface IDiscoveryEntry {
  name: string;
  description: string;
  icon: string;
  hostname: string;
  containerName: string;
  sourceAddress: string;
  targetAddress: string;
}

interface IDiscoveryScan {
  created: Date;
  hash: string;
  entries: IDiscoveryEntry[];
}

interface IDiscoveryAgent {
  scan(): Promise<IDiscoveryScan>;
}

export { IDiscoveryEntry, IDiscoveryAgent, IDiscoveryScan };
