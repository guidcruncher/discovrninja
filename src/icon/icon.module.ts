import { Module } from '@nestjs/common';
import { IconCDNService } from "./icon-cdn.service";
import { IconService } from "./icon.service";
import { IconController } from "./icon.controller";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [IconController]],
  providers: [IconService, IconCDNService],
  exports: [IconService],
})
Module({})
export class IconModule {}
