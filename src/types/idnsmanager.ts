import { IDnsEntry} from "@types/idnsentry";

export interface IDnsManager {
  pushToDns(entry: IDnsEntry): Promise<boolean>;
  remove(entry: IDnsEntry): void;
  contains(host: string): Promise<boolean>;
  resolve(host: string): Promise<string>;
  get(): Promise<IDnsEntry[]>;
}
