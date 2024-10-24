import dns from "node:dns";
import os from "node:os";
import superagent from "superagent";
import { IDiscoveryScan } from "@discovery/idiscoveryentry";

export class IpUtilities {
  public getIpAddress(hostname: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const options = { family: 4 };
      dns.lookup(hostname, options, (err, addr) => {
        if (err) {
          reject(err);
        } else {
          resolve(addr);
        }
      });
    });
  }

  public getHostIpAddress(): string {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName of Object.keys(networkInterfaces)) {
      const networkInterface = networkInterfaces[interfaceName];
      if (networkInterface) {
        for (const net of networkInterface) {
          if (net.family === "IPv4" && !net.internal) {
            return net.address;
          }
        }
      }
    }
    return "";
  }

  public checkUrlLive(url: IAddress): Promise<IAddress> {
    return new Promise<IAddress>((resolve, reject) => {
      superagent.head(url.address).end((err, res) => {
        if (err) {
          if (err.status) {
            resolve(url);
          } else {
            reject(err);
          }
        } else {
          if (res.status != 404 && res.status != 500) {
            resolve(url);
          } else {
            reject();
          }
        }
      });
    });
  }

  public convertSourceToHostEntry(entry: IDiscoveryEntry): string {
    if (entry.sourceAddress.address == "") {
      return "";
    }

    const addr: IAddress = entry.ipAddresses.find(
      (a) => a.network == entry.sourceAddress.network,
    );

    return addr.address.padEnd(16, " ") + " " + entry.hostname;
  }

  public convertSourceToHosts(scan: IDiscoveryScan): string {
    return scan.entries
      .filter((a) => a.sourceAddress.address != "")
      .map((a) => this.convertSourceToHostEntry(a))
      .join("\n");
  }

  public convertTargetToHostEntry(entry: IDiscoveryEntry): string {
    if (entry.targetAddress == "") {
      return "";
    }

    const uri = new URL(entry.targetAddress);
    const addr = this.getHostIpAddress();
    return addr.padEnd(16, " ") + " " + entry.hostname;
  }

  public convertTargetToHosts(scan: IDiscoveryScan): string {
    return scan.entries
      .filter((a) => a.targetAddress != "")
      .map((a) => this.convertTargetToHostEntry(a))
      .join("\n");
  }

}

export interface IAddress {
  network: string;
  address: string;
}
