import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResourcesService } from "@services/resources.service";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";

@Injectable()
export class DesktopService {
  private readonly logger = new Logger(DesktopService.name);

  constructor(
    private configService: ConfigService,
    private resourcesService: ResourcesService,
  ) {}

  private readFile(): any {
    const filename = path.resolve(this.configService.get("desktop.filename"));

    this.logger.log("Reading desktop from", filename);
    if (fs.existsSync(filename)) {
      const values = yaml.load(fs.readFileSync(filename, "utf8")) as Record<
        string,
        any
      >;
      return values;
    } else {
      this.logger.error("Desktop file not found", filename);
    }

    return {};
  }

  public renderDesktop(): any {
    return new Promise((resolve, reject) => {
      const desktop = this.readFile();
      if (desktop.theme) {
        if (!desktop.theme.toLowerCase().startsWith("http")) {
          desktop.theme = "/assets/themes/" + desktop.theme;
        }
      }

      if (desktop.background) {
        if (desktop.background.type == "daily") {
          let p: Promise<string> = null;
          switch (desktop.background.url) {
            case "nasa":
              p = this.resourcesService.getNasaDailyImageUrl();
              break;
            case "bing":
              p = this.resourcesService.getBingDailyImageUrl();
              break;
          }

          if (p) {
            p.then((url) => {
              desktop.background.url = url;
              desktop.background.type = "image";
              resolve(desktop);
            }).catch((err) => {
              reject(err);
            });
          } else {
            reject("Invalid daily image type");
          }
        } else {
          resolve(desktop);
        }
      } else {
        resolve(desktop);
      }
    });
  }
}
