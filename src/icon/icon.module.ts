import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { IconController } from "./icon.controller";
import { IconService } from "./icon.service";
import { IconCDNService } from "./icon-cdn.service";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [IconController],
  providers: [IconService, IconCDNService],
  exports: [IconService, IconCDNService],
})
export class IconModule {}
