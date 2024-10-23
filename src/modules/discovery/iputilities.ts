import dns from "node:dns";
import os from "node:os";
import fetch from "node:fetch";

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

  public getHostIpAddresa(): Promise<string> {
    return this.getIpAddress(os.hostname());
  }

  public checkAddressLive(url: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      fetch(url, { method: "HEAD" })
        .then((response) => {
          resolve(response.ok);
        })
        .catch((err) => reject(err));
    });
  }
}
