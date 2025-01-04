import { Controller, Get, Query, Req, Res } from "@nestjs/common";
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

  @Get("background/globe")
  getGlobeImage(
    @Query("h") height,
    @Query("lat") lat,
    @Query("long") long,
    @Query("alt") alt,
    @Req() req,
    @Res() res,
  ) {
    return new Promise((resolve, reject) => {
      this.resourcesService
        .getGlobeImageUrl(height, lat, long, alt)
        .then((targetUrl) => {
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
    });
  }

  @Get("background")
  getBackground(@Query("w") width, @Query("h") height, @Req() req, @Res() res) {
    return new Promise((resolve, reject) => {
      let p: Promise<string> = null;
      const baseUrl =
        this.configService.get("webProxy.baseUrl") ??
        req.protocol + "://" + req.hostname;
      const desktop = this.desktopService.readFile();
      if (["daily", "image"].includes(desktop.background.type)) {
        switch (desktop.background.url) {
          case "nasa":
            p = this.resourcesService.getNasaDailyImageUrl();
            break;
          case "globe":
            p = this.resourcesService.getGlobeImageUrl(height, 0, 0, 0);
            break;
          case "bing":
            p = new Promise<string>((resolve, reject) => {
              resolve(`http://127.0.0.1:5001/assets/img/bing.jpg`);
            });
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

  @Get("daily/globe")
  async getGlobeDailyImageUrl(): Promise<string> {
    return this.resourcesService.getGlobeImageUrl(0, 0, 0, 0);
  }

  @Get("daily/nasa")
  async getNasaDailyImageUrl(): Promise<string> {
    return this.resourcesService.getNasaDailyImageUrl();
  }
}
