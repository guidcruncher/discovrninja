import { Controller, Get, Query, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResourcesService } from "@services/resources.service";

@Controller("api/resources")
export class ResourcesController {
  constructor(
    private configService: ConfigService,
    private resourcesService: ResourcesService,
  ) {}

  @Get("weather")
  async fetchWeather(
    @Query("latitude") lat: number,
    @Query("longitude") long: number,
    @Query("days") days: number,
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.resourcesService
        .fetchWeather(lat, long, days)
        .then((weather) => {
          resolve(weather);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Get("location")
  async determineLocation(): Promise<any> {
    return this.resourcesService.determineLocation();
  }

  @Get("rss")
  async getRSSFeed(@Query("url") url: string): Promise<any> {
    return this.resourcesService.getRSSFeed(url);
  }

  @Get("feed")
  async getFeed(@Query("url") url: string): Promise<any> {
    return this.resourcesService.getFeed(url);
  }

  @Get("blob")
  async getBlob(@Query("url") url: string, @Res() res): Promise<any> {
    let contenttype = "";

    fetch(url)
      .then((response) => {
        contenttype = response.headers.get("Content-Type");
        return response.body;
      })
      .then((buffer) => {
        res.header("content-type", contenttype).send(buffer);
      });
  }

  @Get("daily/bing")
  async getBingDailyImageUrl(): Promise<string> {
    return this.resourcesService.getBingDailyImageUrl();
  }

  @Get("daily/nasa")
  async getNasaDailyImageUrl(): Promise<string> {
    return this.resourcesService.getNasaDailyImageUrl();
  }
}
