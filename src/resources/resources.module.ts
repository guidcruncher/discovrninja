import { Module } from "@nestjs/common";
import { ResourcesController } from "./resources.controller";
import { ResourcesService } from "./resources.service";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [ResourcesController],
  providers: [ResourcesService],
  exports: [ResoucesService],
})
export class ResourcesModule {}
