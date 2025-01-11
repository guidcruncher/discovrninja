import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { BookmarksController } from "./bookmarks.controller";
import { DesktopController } from "./desktop.controller";
import { DesktopService } from "./desktop.service";
import { LinkdingController } from "./linkding.controller";
import { LinkdingService } from "./linkding.service";
import { NewsController } from "./news.controller";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [
    LinkdingController,
    DesktopController,
    BookmarksController,
    NewsController,
  ],
  providers: [DesktopService, LinkdingService],
  exports: [],
})
export class DesktopModule {}
