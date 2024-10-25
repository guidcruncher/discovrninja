import dns from "node:dns";
import os from "node:os";
import superagent from "superagent";
import { IDiscoveryEntry, IDiscoveryScan } from "@discovery/idiscoveryentry";
import path from "node:path";
import fs from "node:fs";

export class IpUtilities {
  private uniqueArray(array) {
    return Array.from(array.reduce((set, e) => set.add(e), new Set()));
  }

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
      console.log("Trying", url.address);
      superagent
        .head(url.address)
        .timeout({
          deadline: 1000,
          response: 2000,
        })
        .end((err, res) => {
          if (err) {
            if (err.status) {
              console.log(url.address, err.status);
              resolve(url);
            } else {
              reject(err);
            }
          } else {
            console.log(url.address, res.status);

            if (res.status != 500) {
              resolve(url);
            } else {
              reject();
            }
          }
        });
    });
  }

  public convertSourceToHostEntry(entry: IDiscoveryEntry): string {
    if (!entry.sourceAddress || !entry.sourceAddress.address) {
      return "";
    }

    if (entry.sourceAddress.address == "") {
      return "";
    }

    const addr = entry.ipAddresses.find(
      (a) => a.network == entry.sourceAddress.network,
    );
    if (addr) {
      return addr.address.padEnd(16, " ") + " " + entry.hostname;
    }
    return "";
  }

  public convertSourceToHosts(scan: IDiscoveryScan): string[] {
    return this.uniqueArray(
      scan.entries
        .filter((a) => a.sourceAddress.address != "")
        .sort((a, b) => a.hostname.localeCompare(b.hostname))
        .map((a) => this.convertSourceToHostEntry(a)),
    ).filter((a) => a != "") as string[];
  }

  public convertTargetToHostEntry(entry: IDiscoveryEntry): string {
    if (!entry.targetAddress || entry.targetAddress == "") {
      return "";
    }

    const uri = new URL(entry.targetAddress);
    const addr = this.getHostIpAddress();
    return addr.padEnd(16, " ") + " " + uri.hostname;
  }

  public convertTargetToHosts(scan: IDiscoveryScan): string[] {
    return this.uniqueArray(
      scan.entries
        .filter((a) => a.targetAddress && a.targetAddress != "")
        .sort((a, b) => a.targetAddress.localeCompare(b.targetAddress))
        .map((a) => this.convertTargetToHostEntry(a)),
    ).filter((a) => a != "") as string[];
  }

  public saveDNSConfig(e: IDiscoveryEntry) {
    if (e.targetAddress) {
      const uri: URL = new URL(e.targetAddress);
      const filename = path.join(
        process.env.DNSHOSTS as string,
        uri.hostname + ".conf",
      );

      console.log(this.convertTargetToHostEntry(e));
      fs.writeFileSync(filename, this.convertTargetToHostEntry(e), {
        encoding: "utf8",
      });
    }
  }
}

export interface IAddress {
  network: string;
  address: string;
  preferred: boolean;
}
