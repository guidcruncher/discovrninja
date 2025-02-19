import { CryptoHelper } from "@helpers/cryptohelper";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResourcesService } from "@resources/resources.service";
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

  public readFile(): any {
    const filename = path.resolve(
      path.join(
        process.env.NODE_CONFIG_DIR,
        this.configService.get("desktop.filename"),
      ),
    );

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

  private id() {
    return CryptoHelper.generateId();
  }

  public renderDesktop(): any {
    let dynamic = false;
    return new Promise((resolve, reject) => {
      const desktop = this.readFile();

      Object.keys(desktop.layout).forEach((key) => {
        desktop.layout[key].items.forEach((item) => {
          Object.keys(item).forEach((prop) => {
            if (item[prop]) {
              item[prop].id = this.id();
            } else {
              item[prop] = { id: this.id() };
            }
          });
        });
      });

      if (desktop.theme) {
        if (!desktop.theme.toLowerCase().startsWith("http")) {
          desktop.theme = "/assets/themes/" + desktop.theme;
        }
      }
      desktop.background.cssclass = "bgimage";
      if (desktop.background) {
        if (desktop.background.type == "daily") {
          let p: Promise<string> = null;

          switch (desktop.background.url) {
            case "nasa":
              p = this.resourcesService.getNasaDailyImageUrl();
              break;
            case "bing":
              desktop.background.type = "image";
              desktop.background.url = "/assets/img/bing.jpg";
              desktop.background.isimage = true;
              break;
            case "globe":
              dynamic = desktop.background.dynamic ?? true;
              p = this.resourcesService.getGlobeImageUrl(0, 0, 0, 0);
              desktop.background.cssclass = "bgimage-globe";
              break;
          }

          if (p) {
            p.then((url) => {
              desktop.background.isimage = true;
              if (dynamic) {
                desktop.background.dynamic = true;
                if (!desktop.background.reloadIntervalMinutes) {
                  desktop.background.reloadIntervalMinutes = 15;
                }
              }
              desktop.background.url = url;
              desktop.background.type = "image";
              resolve(desktop);
            }).catch((err) => {
              reject(err);
            });
          } else {
            resolve(desktop);
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
