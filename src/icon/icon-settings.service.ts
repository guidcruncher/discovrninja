import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";
import yargs from "yargs";

export interface FormatParams {
  slug?: string;
  filename?: string;
}
@Injectable()
export class IconSettingsService {
  constructor(private configService: ConfigService) {
    this.all();
  }

  private settings = null;

  private getConfigFolder() {
    const argv: any = yargs(process.argv.slice(2))
      .options({ c: { type: "string", alias: "config" } })
      .parse();
    let configFilename = "";

    if (!argv.c) {
      configFilename = path.join(
        process.env.NODE_CONFIG_DIR ?? process.cwd(),
        "config.yaml",
      );
    } else {
      configFilename = path.join(process.cwd(), argv.c);
      if (!fs.existsSync(configFilename)) {
        configFilename = argv.c;
      }
    }

    return path.dirname(configFilename);
  }

  public all() {
    if (this.settings) {
      return this.settings;
    }

    const filename = path.join(this.getConfigFolder(), "iconsets.json");

    if (!fs.existsSync(filename)) {
      return [];
    }

    const json = fs.readFileSync(filename, "utf-8");
    const obj = JSON.parse(json);
    this.settings = obj;
    return obj;
  }

  public keys() {
    return this.all()
      .map((n) => {
        return n.catalog;
      })
      .sort();
  }

  public get(catalog: string) {
    return this.all().find((n) => {
      return n.catalog == catalog;
    });
  }

  public each(eachFunc: (catalog: any) => void) {
    this.all().forEach((n) => {
      eachFunc(n);
    });
  }

  public format(value: string, args: FormatParams) {
    let result = value;
    Object.keys(args).forEach((k) => {
      if (args[k]) {
        result = result.replaceAll("{" + k.toLowerCase() + "}", args[k]);
      }
    });
    return result;
  }
}
