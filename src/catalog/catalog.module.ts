import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { ComposeController } from "./compose.controller";
import { ComposeService } from "./compose.service";
import { PortainerController } from "./portainer.controller";
import { PortainerService } from "./portainer.service";

@Module({
  imports: [Schemas.CompileModels()],
  controllers: [PortainerController, ComposeController],
  providers: [PortainerService, ComposeService],
  exports: [ComposeService, PortainerService],
})
export class CatalogModule {}
