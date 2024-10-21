interface IDnsEntry {
  readonly host: string;
  readonly address: string;
}

interface IDnsManager {
  pushToDns(entry: IDnsEntry): boolean;
  remove(entry: IDnsEntry): void;
  contains(host: string): boolean;
  resolve(host: string): string;
  get(): IDnsEntry[];
}

export { IDnsEntry, IDnsManager };
