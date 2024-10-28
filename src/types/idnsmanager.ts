import { DnsEntry } from "@types/dnsentry";

interface IDnsManager {
  pushToDns(entry: DnsEntry): Promise<boolean>;
  remove(entry: DnsEntry): void;
  contains(host: string): Promise<boolean>;
  resolve(host: string): Promise<string>;  
get(): Promise<DnsEntry[]>;
}

export { IDnsManager };
