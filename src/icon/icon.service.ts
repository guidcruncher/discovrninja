import { HttpUtilities } from "@helpers/httputilities";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";

import { IconSettingsService } from "./icon-settings.service";

export interface IconResult {
  headers: { "Content-Type": string; "Content-Disposition": string };
  catalog: string;
  slug: string;
  url: string;
  data: ArrayBuffer;
}

@Injectable()
export class IconService {
  private logger: Logger = new Logger(IconService.name);

  constructor(
    private configService: ConfigService,
    private iconSettingsService: IconSettingsService,
  ) {}

  private resourceSourceUrl(catalog, slug) {
    const data = this.iconSettingsService.get(catalog);
    const filename = this.iconSettingsService.format(data.filename, {
      slug: slug,
    });
    return this.iconSettingsService.format(data.iconUrl, {
      slug: slug,
      filename: filename,
    });
  }

  private ensureLocalIcon(catalog, slug) {
    return new Promise((resolve, reject) => {
      const data = this.iconSettingsService.get(catalog);
      const url =
        "/icons/" +
        catalog.toLowerCase() +
        "/" +
        this.iconSettingsService.format(data.filename, { slug: slug });
      const srcUrl = this.resourceSourceUrl(catalog, slug);
      let dirPath = this.configService.get("desktop.localIconCacheFolder");
      if (process.env.IN_DOCKER) {
        dirPath = "/iconcache";
      }

      dirPath = path.join(
        dirPath,
        catalog.toLowerCase(),
        this.iconSettingsService.format(data.filename, { slug: slug }),
      );
      const basePath = path.dirname(dirPath);
      if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath, { recursive: true });
      }
      if (fs.existsSync(dirPath)) {
        resolve(url);
        return;
      }

      const client = new HttpUtilities();
      client
        .retrieveBinary("GET", srcUrl)
        .then((data) => {
          fs.writeFileSync(dirPath, data);
          resolve(url);
        })
        .catch((err) => {
          this.logger.error("Error in ensureLocalIcon", err);
          resolve(srcUrl);
        });
    });
  }

  resolveIconUrl(catalog: string, slug: string) {
    return new Promise((resolve, reject) => {
      if (this.configService.get("desktop.enableLocalIconCache")) {
        this.ensureLocalIcon(catalog, slug)
          .then((url) => {
            resolve(url);
          })
          .catch((err) => {
            this.logger.error("Error resolving local icon", err);
          });
      } else {
        resolve(this.resourceSourceUrl(catalog, slug));
      }
    });
  }
}
