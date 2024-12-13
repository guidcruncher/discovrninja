import { Controller, Get, Query, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DesktopService } from "@services/desktop.service";
import { ResourcesService } from "@services/resources.service";

@Controller("api/desktop")
export class DesktopController {
  constructor(
    private configService: ConfigService,
    private resourcesService: ResourcesService,
    private desktopService: DesktopService,
  ) {}

  @Get("background")
  getBackground(@Query("w") width, @Query("h") height, @Res() res) {
    return new Promise((resolve, reject) => {
      let p: Promise<string> = null;
      const desktop = this.desktopService.readFile();
      if (["daily", "image"].contains(desktop.background.type)) {
        switch (desktop.background.url) {
          case "bing":
            p = this.resourcesService.getBingDailyImageUrl();
            break;
          case "nasa":
            p = this.resourcesService.getNasaDailyImageUrl();
            break;
          case "globe":
            p = this.resourcesService.getGlobeImageUrl(height);
            break;
          default:
            p = new Promise<string>((resolve, reject) => {
              resolve(desktop.background.url);
            });
            break;
        }

        p.then((targetUrl) => {
          this.resourcesService
            .proxy(targetUrl)
            .then((result) => {
              res.status(200);
              res.header("content-type", result.contentType);
              res.header(
                "content-disposition",
                "inline; filename=" + result.url.pathname.split("/").pop(),
              );
              res.send(result.data);
              resolve(true);
            })
            .catch((err) => {
              res.status(500).send(err);
              reject(err);
            });
        });
      } else {
        res.status(404).send();
        resolve(false);
      }
    });
  }

  @Get("daily/bing")
  async getBingDailyImageUrl(): Promise<string> {
    return this.resourcesService.getBingDailyImageUrl();
  }

  @Get("daily/globe")
  async getGlobeDailyImageUrl(): Promise<string> {
    return this.resourcesService.getGlobeImageUrl(0);
  }

  @Get("daily/nasa")
  async getNasaDailyImageUrl(): Promise<string> {
    return this.resourcesService.getNasaDailyImageUrl();
  }
}
