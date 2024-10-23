import dns from "node:dns";
import os from "node:os";
import { IAddress } from "discovery/idiscoveryentry";
import superagent from "superagent";

export class IpUtilities {
  public getIpAddress(hostname: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const options = { family: 4 };

      dns.lookup(os.hostname(), options, (err, addr) => {
        if (err) {
          reject(err);
        } else {
          resolve(addr);
        }
      });
    });
  }

  public getHostIpAddress(): Promise<string> {
    return this.getIpAddress(os.hostname());
  }

  public checkUrlLive(url: IAddress): Promise<IAddress> {
    return new Promise<IAddress>((resolve, reject) => {
      console.log("Resolving " + url.address);
      superagent.head(url.address).end((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.status != 404 && res.status != 500) {
console.log(url);
            resolve(url);
          } else {
            reject();
          }
        }
      });
    });
  }
}
