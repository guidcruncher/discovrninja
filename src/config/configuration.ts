import { Logger } from "@nestjs/common";
import { readFileSync } from "fs";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";
import yargs from "yargs";

/**
 * Loads configuration from a yaml file
 */
export default () => {
  const log = new Logger("Config");
  const argv: any = yargs(process.argv.slice(2))
    .options({ c: { type: "string", alias: "config" } })
    .parse();
  let configFolder = "";

  if (!argv.c) {
    configFolder = path.join(
      process.env.NODE_CONFIG_DIR ?? __dirname,
      "config.yaml",
    );
  } else {
    configFolder = path.join(__dirname, argv.c);
    if (!fs.existsSync(configFolder)) {
      configFolder = argv.c;
    }
  }

  log.debug("Loading configuration from " + configFolder);
  const configFilename = path.join(configFolder);
  log.debug("Reading Configuration file " + configFilename);

  if (fs.existsSync(configFilename)) {
    return yaml.load(readFileSync(configFilename, "utf8")) as Record<
      string,
      any
    >;
  }

  log.error("ERROR: Configuration file not found.");
  return null;
};
