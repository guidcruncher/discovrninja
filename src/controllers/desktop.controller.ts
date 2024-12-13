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
      }

      if (p) {
        p.then((response) => {
          res.status(302).redirect(response);
          resolve(response);
        }).catch((err) => {
          reject(err);
        });
      } else {
        resolve(desktop);
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
