import * as crypto from "crypto";

export class CryptoHelper {
  public static generateId() {
    return crypto.randomBytes(16).toString("hex");
  }

  public static createHash(algorithm: string, options?: any): any {
    return crypto.createHash(algorithm, options);
  }

  public static computeHash(algorithm: string, value: any, options?: any) {
    return crypto.createHash(algorithm, options).update(value).digest("hex");
  }

  public static createHMACSecret(length: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      crypto.generateKey("hmac", { length: length ?? 512 }, (err, key) => {
        if (err) {
          reject(err);
        } else {
          resolve(key.export().toString("hex"));
        }
      });
    });
  }

  public static createHMAC(
    payload: any,
    algorithm: string,
    secret: string,
    encoding: crypto.BinaryToTextEncoding,
  ): string {
    const hash = crypto
      .createHmac(algorithm, secret)
      .update(JSON.stringify(payload))
      .digest(encoding);
    return hash;
  }
}
