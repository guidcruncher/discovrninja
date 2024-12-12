import { Controller, Get } from "@nestjs/common";
import { Query } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { LinkdingService } from "@services/ext.linkding.service";

@Controller("api/external/linkding")
export class LinkdingController {
  constructor(
    private configService: ConfigService,
    private linkdingService: LinkdingService,
  ) {}

  @Get("tags")
  async gettags() {
    return this.linkdingService.getTags();
  }

  @Get("tags/count")
  async counttags() {
    return this.linkdingService.countTags();
  }

  @Get("bookmarks")
  async getbookmarks(@Query("tag") tag) {
    return this.linkdingService.getBookmarks(tag);
  }
}
