import { IDnsEntry, IDnsManager } from "./idns";

export class DnsMasqManager implements IDnsManager {
  public pushToDns(entry: IDnsEntry): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }

  public remove(entry: IDnsEntry) {
    return;
  }

  public contains(host: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }

  public resolve(host: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      resolve("");
    });
  }

  public get(): Promise<IDnsEntry[]> {
    return new Promise<IDnsEntry[]>((resolve, reject) => {
      resolve(null);
    });
  }
}
