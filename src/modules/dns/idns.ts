interface IDnsEntry {
  readonly host: string;
  readonly address: string;
}

interface IDnsManager {
  pushToDns(entry: IDnsEntry): Promise<boolean>;
  remove(entry: IDnsEntry): void;
  contains(host: string): Promise<boolean>;
  resolve(host: string): Promise<string>;
  get(): Promise<IDnsEntry[]>;
}

interface IAddress {
  network: string;
  address: string;
}

export { IDnsEntry, IDnsManager };
