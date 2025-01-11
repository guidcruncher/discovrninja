import { Logger } from "@nestjs/common";
import { Controller, Get, Query, Res } from "@nestjs/common";
import { ResourcesService } from "@services/resources.service";

@Controller("/")
export class NewsController {
  constructor(private readonly resourcesService: ResourcesService) {}

  private readonly logger = new Logger(NewsController.name);

  @Get("/news")
  async getnews(@Query("url") url, @Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.resourcesService
        .getFeed(url)
        .then((feed) => {
          feed.feedUrl = url;
          res.view("news.hbs", feed, { layout: "" });
          resolve();
        })
        .catch((err) => {
          res.status(500).send(err);
          reject(err);
        });
    });
  }
}
