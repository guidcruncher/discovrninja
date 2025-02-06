import { StringBuilder } from "@customtypes/stringbuilder";
import { ServiceDefinitionService } from "@data/service-definition.service";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";

import { IConfigAdapter } from "./adapter.service";
import { FileCompare } from "./filecompare";

@Injectable()
export class CaddyService implements IConfigAdapter {
  private readonly logger = new Logger(CaddyService.name);

  constructor(
    private configService: ConfigService,
    private serviceDefinitionService: ServiceDefinitionService,
  ) {}

  private formatUrl(url: string): string {
    if (!url) {
      return "";
    }
    let s = url.trim();
    s = s.replaceAll("'", "");
    if (!s.startsWith("http")) {
      s = "http://" + s;
    }
    return s;
  }

  public writeHosts() {
    return new Promise((resolve, reject) => {
      const baseDir = this.configService.get("discovery.web.sites");

      let changed = false;

      if (baseDir == "") {
        reject();
        return;
      }

      if (!this.configService.get("webProxy.autoUpdate")) {
        reject();
        return;
      }

      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }

      this.serviceDefinitionService
        .all(true)
        .then((services) => {
          services
            .sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
            .forEach((sd) => {
              try {
                const valid = (sd.public ?? "") != "" && (sd.proxy ?? "") != "";

                if (valid) {
                  const sb: StringBuilder = new StringBuilder();
                  const publicurl: URL = new URL(this.formatUrl(sd.public));
                  const proxy: URL = new URL(this.formatUrl(sd.proxy));
                  const filename = path.join(
                    baseDir,
                    publicurl.hostname + ".conf",
                  );
                  let port = "";
                  if (publicurl.protocol == "https:") {
                    port = ":443";
                  }
                  sb.appendLine(publicurl.host + port + " {");
                  sb.appendLine(
                    "        reverse_proxy " + proxy.href.slice(0, -1),
                  );
                  sb.appendLine("        import /etc/caddy/includes/cors.conf");
                  sb.appendLine("}");

                  if (!FileCompare.compare(filename + ".md5", sb.toString())) {
                    fs.writeFileSync(filename, sb.toString());
                    changed = true;
                  }
                }
              } catch (err) {
                this.logger.error(
                  "Error writing Caddy configuration for " + sd.name,
                  err,
                );
              }
            });

          if (changed) {
            // reload config
          }
          resolve(changed);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
