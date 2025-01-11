import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { CatalogController } from "./catalog.controller";
import { ComposeController } from "./compose.controller";
import { ComposeService } from "./compose.service";
import { PortainerController } from "./portainer.controller";
import { PortainerService } from "./portainer.service";

@Module({
  imports: [DataModule, Schemas.CompileModels()],
  controllers: [PortainerController, ComposeController, CatalogController],
  providers: [PortainerService, ComposeService],
  exports: [ComposeService, PortainerService],
})
export class CatalogModule {}
