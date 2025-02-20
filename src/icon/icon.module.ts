import { MongoConnection } from "@data/data.connection";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { IconController } from "./icon.controller";
import { IconService } from "./icon.service";
import { IconCDNService } from "./icon-cdn.service";
import { IconSettingsService } from "./icon-settings.service";

@Module({
  imports: [DataModule, MongoConnection.setup(), Schemas.CompileModels()],
  controllers: [IconController],
  providers: [IconService, IconCDNService, IconSettingsService],
  exports: [IconService, IconCDNService],
})
export class IconModule {}
