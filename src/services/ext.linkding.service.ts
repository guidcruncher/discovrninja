import { FluentHttpClient } from "@helpers/fluenthttpclient";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Parser from "rss-parser";

@Injectable()
export class LinkdingService {
  private readonly logger = new Logger(LinkdingService.name);

  constructor(private configService: ConfigService) {}

  public countTags(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const result: any = {};
      const feedUrl = this.configService.get(
        "externalservices.linkding.feedUrl",
      );

      this.getTags()
        .then((tags) => {
          tags.forEach((tag) => {
            result[tag.trim()] = 0;
          });
          const parser = new Parser();
          parser
            .parseURL(feedUrl)
            .then((feed) => {
              feed.items.forEach((item) => {
                if (item.categories) {
                  item.categories.forEach((cat) => {
                    result[cat.trim()] += 1;
                  });
                }
              });
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error parsing Linkding bookmark feed", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error in counttTags", err);
          reject(err);
        });
    });
  }

  public getBookmarks(tag: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const result: any[] = [];
      const url = this.configService.get("externalservices.linkding.apiUrl");
      const apiKey = this.configService.get(
        "externalservices.linkding.apiToken",
      );
      const feedUrl = this.configService.get(
        "externalservices.linkding.feedUrl",
      );
      const hostname =
        this.configService.get("externalservices.linkding.hostname") ?? "";

      const applyHostName = function (url) {
        if (url == "") {
          return "";
        }
        const u = new URL(url);
        const s = new URL(hostname);
        u.host = s.host;
        u.port = s.port;
        u.protocol = s.protocol;
        return u.href;
      };

      const client = FluentHttpClient.Get(
        url + "/bookmarks?limit=65535&q=" + encodeURIComponent("#" + tag),
      )
        .Authorization("Token", apiKey)
        .Execute()
        .then((response) => {
          const obj: any = JSON.parse(response.value);
          if (hostname != "") {
            obj.results.forEach((l) => {
              if (l.preview_image_url) {
                l.preview_image_url = applyHostName(l.preview_image_url);
              }

              if (l.favicon_url) {
                l.favicon_url = applyHostName(l.favicon_url);
              }
            });
          }
          resolve(obj);
        })
        .catch((err) => {
          this.logger.error("Error in getbookmarks", err);
          reject(err);
        });
    });
  }

  public getTags(): Promise<string[]> {
    return new Promise<any>((resolve, reject) => {
      const result: any[] = [];
      const url = this.configService.get("externalservices.linkding.apiUrl");
      const apiKey = this.configService.get(
        "externalservices.linkding.apiToken",
      );
      const feedUrl = this.configService.get(
        "externalservices.linkding.feedUrl",
      );

      const client = FluentHttpClient.Get(url + "/tags")
        .Authorization("Token", apiKey)
        .Execute()
        .then((response) => {
          const obj: any = JSON.parse(response.value);
          obj.results.forEach((tag) => {
            result.push(tag.name);
          });
          resolve(result.sort());
        })
        .catch((err) => {
          this.logger.error("Error in getTags", err);
          reject(err);
        });
    });
  }
}
