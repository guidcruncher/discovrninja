"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigReader = void 0;
var common_1 = require("@nestjs/common");
var fs_1 = require("fs");
var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
var yargs_1 = require("yargs");
/**
 * Loads configuration from a yaml file
 */
var ConfigReader = /** @class */ (function () {
    function ConfigReader() {
    }
    ConfigReader.Read = function () {
        var _a;
        var log = new common_1.Logger(ConfigReader.name);
        try {
            var argv = (0, yargs_1.default)(process.argv.slice(2))
                .options({ c: { type: "string", alias: "config" } })
                .parse();
            var configFilename = "";
            if (!argv.c) {
                configFilename = path.join((_a = process.env.NODE_CONFIG_DIR) !== null && _a !== void 0 ? _a : process.cwd(), "config.yaml");
            }
            else {
                configFilename = path.join(process.cwd(), argv.c);
                if (!fs.existsSync(configFilename)) {
                    configFilename = argv.c;
                }
            }
            log.debug("Reading Configuration file " + configFilename);
            if (fs.existsSync(configFilename)) {
                return yaml.load((0, fs_1.readFileSync)(configFilename, "utf8"));
            }
            log.error("Error loading configuration, File not found." + configFilename);
            return null;
        }
        catch (err) {
            log.error("Error loadihg configuration", err);
        }
    };
    return ConfigReader;
}());
exports.ConfigReader = ConfigReader;
