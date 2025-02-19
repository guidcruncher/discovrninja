import { CryptoHelper } from "@helpers/cryptohelper";
import * as fs from "fs";

export class FileCompare {
  public static compare(filename: string, newValue: string): boolean {
    const newHash = CryptoHelper.createHash("md5").update(newValue).digest("hex");

    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, newHash);
      return false;
    }

    const currentHash = fs.readFileSync(filename, "utf8");

    if (currentHash != newHash) {
      fs.writeFileSync(filename, newHash);
      return false;
    }

    return true;
  }
}
