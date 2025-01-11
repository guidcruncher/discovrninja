import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { DesktopController } from "./desktop.controller";
import { DesktopService } from "./desktop.service";
import { BookmarksController } from "./bookmarks.controller";
import { NewsController } from "./news.controller";
import { LinkdingService } from "./linkding.service";
import { LinkdingController } from "./linkding.controller";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [LinkdingController, DesktopController, BookmarksController, NewsController],
  providers: [DesktopService, LinkdingService ],
  exports: [],
})
export class DesktopModule {}
