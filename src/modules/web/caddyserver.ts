import { IDiscoveryEntry, IDiscoveryScan } from "@discovery/idiscoveryentry";

export class CaddyServerUtility {
  private uniqueArray(array) {
    return Array.from(array.reduce((set, e) => set.add(e), new Set()));
  }

  private getSourceAddress(entry: IDiscoveryEntry): string {
    if (!entry.sourceAddress || !entry.sourceAddress.address) {
      return "";
    }
    if (entry.sourceAddress.address == "") {
      return "";
    }

    return entry.sourceAddress.address;
  }

  private getTargetAddress(entry: IDiscoveryEntry): string {
    if (!entry.targetAddress || entry.targetAddress == "") {
      return "";
    }
    const uri = new URL(entry.targetAddress);

    if (uri.protocol == "http:") {
      return uri.hostname + ":" + (uri.port ? uri.port : "80");
    }

    return uri.hostname + ":" + (uri.port ? uri.port : "443");
  }

  public getServerConfigurationEntry(entry: IDiscoveryEntry): string {
    const targetAddress: string = this.getTargetAddress(entry);
    const sourceAddress: string = this.getSourceAddress(entry);

    if (sourceAddress == "" || targetAddress == "") {
      return "";
    }

    return targetAddress + " {\n        reverse_proxy " + sourceAddress + "\n}";
  }

  public getServerConfiguration(scan: IDiscoveryScan): string[] {
    return this.uniqueArray(
      scan.entries
        .filter((a) => a.targetAddress && a.targetAddress != "")
        .sort((a, b) => a.targetAddress.localeCompare(b.targetAddress))
        .map((a) => this.getServerConfigurationEntry(a)),
    ).filter((a) => a != "") as string[];
  }
}
