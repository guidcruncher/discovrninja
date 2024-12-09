import { Address } from "@customtypes/address";
import axios from "axios";
import * as dns from "dns";
import * as os from "os";

/**
 * IP helper utilities
 */
export class IpUtilities {
  private uniqueArray(array) {
    return Array.from(array.reduce((set, e) => set.add(e), new Set()));
  }

  /**
   * Resolves hostname to IP using operating system resolver
   * @returns IP Address
   */
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

  /**
   * Gets the Host IP address
   * @returns IP Address
   */
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

  private retrieve(method: string, url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const instance = axios.create();
        instance
          .get(url, { method: "GET", timeout: 5000 })
          .then((response) => {
            resolve("");
          })
          .catch((err) => {
            if (err.status) {
              resolve("");
            } else {
              reject(err);
            }
          });
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Performs a HTTP HEAD Request to determine if a url is alive.
   * @returns request results
   */
  public checkUrlLive(url: Address): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.retrieve("GET", url.address)
        .then((res) => {
          resolve(url);
        })
        .catch((err) => {
          reject();
        });
    });
  }
}
