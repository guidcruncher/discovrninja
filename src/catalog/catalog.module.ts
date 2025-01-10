import { CompileModels } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { PortainerController } from "./portainer.controller";
import { PortainerService } from "./portainer.service";

@Module({
  imports: [CompileModels],
  controllers: [PortainerController],
  providers: [PortainerService],
  exports: [],
})
export class CatalogModule {}
