import { DockerService } from "@container/docker.service";
import { ServiceDefinitionService } from "@data/service-definition.service";
import { Desktop } from "@desktop/decorators";
import { Controller, Get, Query, Req, Res } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResourcesService } from "@resources/resources.service";

import { DesktopService } from "./desktop.service";

@Controller("/")
export class DesktopController {
  private logger: Logger = new Logger(DesktopController.name);

  constructor(
    private configService: ConfigService,
    private readonly resourcesService: ResourcesService,
    private readonly desktopService: DesktopService,
    private readonly dockerService: DockerService,
    private readonly serviceDefinitionService: ServiceDefinitionService,
  ) {}

  @Get()
  async homepage(@Desktop() size, @Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.desktopService
        .renderDesktop()
        .then((desktop) => {
          this.serviceDefinitionService.all(true).then((definitions) => {
            res.view(
              "index.hbs",
              { size: size, desktop: desktop, services: definitions },
              { layout: "./layouts/desktop.hbs" },
            );
            resolve();
          });
        })
        .catch((err) => {
          this.logger.error("Error in index", err);
          res.status(500).send(err);
          reject();
        });
    });
  }

  @Get("/desktop.js")
  async getdesktopjs(@Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.desktopService
        .renderDesktop()
        .then((desktop) => {
          const script =
            "const desktop=" +
            JSON.stringify(desktop, null, 0) +
            ";\nlocalStorage.setItem('desktop', JSON.stringify(desktop,null,0));";
          res.type("text/javascript");
          res.send(script);
          resolve();
        })
        .catch((err) => {
          res.status(500).send(err);
          reject(err);
        });
    });
  }

  @Get("api/desktop/background/globe")
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

  @Get("api/desktop/background")
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

  @Get("api/desktop/daily/globe")
  async getGlobeDailyImageUrl(): Promise<string> {
    return this.resourcesService.getGlobeImageUrl(0, 0, 0, 0);
  }

  @Get("api/desktop/daily/nasa")
  async getNasaDailyImageUrl(): Promise<string> {
    return this.resourcesService.getNasaDailyImageUrl();
  }
}
