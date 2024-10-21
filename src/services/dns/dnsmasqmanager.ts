import { IDnsEntry, IDnsManager } from "./idns";

export class DnsMasqManager implements IDnsManager {
  public pushToDns(entry: IDnsEntry): boolean {
    return true;
  }

  public remove(entry: IDnsEntry): void {
    return;
  }

  public contains(host: string): boolean {
    return true;
  }

  public resolve(host: string): string {
    return "";
  }

  public get(): IDnsEntry[] {
    return null;
  }
}
