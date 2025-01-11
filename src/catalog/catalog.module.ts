import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { ComposeController } from "./compose.controller";
import { PortainerController } from "./portainer.controller";
import { PortainerService } from "./portainer.service";
import { ComposeService } from "./compose.service";

@Module({
  imports: [Schemas.CompileModels()],
  controllers: [PortainerController, ComposeController],
  providers: [PortainerService, ComposeService],
  exports: [],
})
export class CatalogModule {}
