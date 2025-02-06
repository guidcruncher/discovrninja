import { StringBuilder } from "@customtypes/stringbuilder";
import { ServiceDefinitionService } from "@data/service-definition.service";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";

import { IConfigAdapter } from "./adapter.service";
import { FileCompare } from "./filecompare";

@Injectable()
export class DnsmasqService implements IConfigAdapter {
  private readonly logger = new Logger(DnsmasqService.name);

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
      const filename = this.configService.get("discovery.dns.hosts");
      const sb: StringBuilder = new StringBuilder();
      let changed = false;
      const baseDir = path.dirname(filename);

      if (!this.configService.get("webProxy.autoUpdate")) {
        resolve(false);
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
              return a.public
                .toLowerCase()
                .localeCompare(b.public.toLowerCase());
            })
            .forEach((sd) => {
              try {
                const valid = (sd.public ?? "") != "" && (sd.proxy ?? "") != "";
                if (valid) {
                  const publicurl: URL = new URL(this.formatUrl(sd.public));
                  const proxy: URL = new URL(this.formatUrl(sd.proxy));
                  sb.appendFormat(
                    "host-record={1},{0}",
                    this.configService.get("webProxy.publicIpAddress"),
                    publicurl.hostname,
                  );
                }
              } catch (err) {
                this.logger.error(
                  "Error writing Dnsmasq configuration for " + sd.name,
                  err,
                );
              }
            });

          if (
            !FileCompare.compare(filename + ".md5", sb.toStringDelimited("\n"))
          ) {
            fs.writeFileSync(filename, sb.toStringDelimited("\n"));
            changed = true;
          }

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
