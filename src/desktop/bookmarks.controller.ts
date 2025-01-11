import { Logger } from "@nestjs/common";
import { Controller, Get, Query, Res } from "@nestjs/common";

import { DesktopService } from "./desktop.service";
import { LinkdingService } from "./linkding.service";

@Controller("/")
export class BookmarksController {
  constructor(
    private readonly desktopService: DesktopService,
    private readonly linkdingService: LinkdingService,
  ) {}

  private readonly logger = new Logger(BookmarksController.name);

  @Get("/bookmarks")
  async getbookmarks(@Query("tag") tag, @Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.linkdingService
        .getBookmarks(tag)
        .then((bookmarks) => {
          this.desktopService
            .renderDesktop()
            .then((desktop) => {
              res.view(
                "bookmarks.hbs",
                { tag: tag, desktop: desktop, bookmarks: bookmarks },
                { layout: "./layouts/desktop.hbs" },
              );
              resolve();
            })
            .catch((err) => {
              res.status(500).send(err);
              reject();
            });
        })
        .catch((err) => {
          res.status(500).send(err);
          reject();
        });
    });
  }
}
