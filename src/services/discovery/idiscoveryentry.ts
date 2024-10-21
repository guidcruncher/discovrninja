interface IDiscoveryEntry {
  name: string;
  description: string;
  icon: string;
  sourceAddress: string;
  targetAddress: string;
}

interface IDiscoveryAgent {
  scan(): Promise<IDiscoveryEntry[]>;
}

export { IDiscoveryEntry, IDiscoveryAgent };
