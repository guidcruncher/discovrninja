import { Public } from "@auth/decorators";
import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { ResourcesService } from "./resources.service";

@Controller("api/resources")
export class ResourcesController {
  constructor(
    private configService: ConfigService,
    private resourcesService: ResourcesService,
  ) {}

  @Post("playlist")
  async getPlaylist(@Body() data): Promise<any[]> {
    const url = data.playlist;
    const result = [];
    return new Promise<any[]>((resolve, reject) => {
      this.resourcesService
        .proxy(url)
        .then((v) => {
          const txt = new TextDecoder().decode(v.data.subarray(0, v.data.length));
          const lines: string[] = txt.split("\n");
          if (lines.length <= 0) {
            resolve(result);
            return;
          }

          if (lines[0] != "#EXTM3U") {
            resolve(result);
            return;
          }
          let curr = null;
          for (let i = 1; i < lines.length; i++) {
            const l = lines[i];
            if (l.startsWith("#EXTINF")) {
              if (curr) {
                result.push(curr);
              }
              const arr = l.split(",");
              curr = { title: arr[1], url: "" };
            } else {
              if (l.endsWith(".m3u8") || l.endsWith(".mp4")) {
                if (curr) {
                  curr.url = l;
                }
              } else {
                curr = null;
              }
            }
          }

          if (curr) {
            result.push(curr);
          }
          resolve(
             result.sort((a, b) => {
              return a.title.localeCompare(b.title);
            }),
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Get("p")
  async fetchProxiedUrl(@Query("u") url: string, @Res() res) {
    return new Promise((resolve, reject) => {
      this.resourcesService
        .proxy(url)
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
          reject(err);
        });
    });
  }

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
    return this.resourcesService.determineLocation(0, 0);
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

  @Public()
  @Get("daily/globe")
  async getGlobeDailyImageUrl(): Promise<string> {
    return this.resourcesService.getGlobeImageUrl(0, 0, 0, 0);
  }

  @Public()
  @Get("daily/globe/:height")
  async getGlobeDailyImageUrlCustom(
    @Param("height") height: number,
  ): Promise<string> {
    return this.resourcesService.getGlobeImageUrl(height, 0, 0, 0);
  }

  @Public()
  @Get("daily/nasa")
  async getNasaDailyImageUrl(): Promise<string> {
    return this.resourcesService.getNasaDailyImageUrl();
  }
}
