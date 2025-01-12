import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { ResourcesController } from "./resources.controller";
import { ResourcesService } from "./resources.service";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [ResourcesController],
  providers: [ResourcesService],
  exports: [ResourcesService],
})
export class ResourcesModule {}
