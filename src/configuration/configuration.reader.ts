import { Logger } from "@nestjs/common";
import { readFileSync } from "fs";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";
import yargs from "yargs";

/**
 * Loads configuration from a yaml file
 */
export class ConfigReader {
  public static Read() {
    try {
      const log = new Logger(ConfigReader.name);
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

      log.debug("Reading Configuration file " + configFilename);

      if (fs.existsSync(configFilename)) {
        return yaml.load(readFileSync(configFilename, "utf8")) as Record<
          string,
          any
        >;
      }
      p;

      log.error(
        "Error loading configuration, File not found." + configFilename,
      );
      return null;
    } catch (err) {
      log.error("Error loadihg configuration", err);
    }
  }
}
