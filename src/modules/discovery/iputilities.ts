import dns from "node:dns";
import os from "node:os";
import { IAddress } from "discovery/idiscoveryentry";
import superagent from "superagent";

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
}
