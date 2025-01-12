import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { IconModule } from "@icon/icon.module";
import { Module } from "@nestjs/common";

import { CatalogController } from "./catalog.controller";
import { ComposeController } from "./compose.controller";
import { ComposeService } from "./compose.service";
import { PortainerController } from "./portainer.controller";
import { PortainerService } from "./portainer.service";

@Module({
  imports: [IconModule, DataModule, Schemas.CompileModels()],
  controllers: [PortainerController, ComposeController, CatalogController],
  providers: [PortainerService, ComposeService],
  exports: [ComposeService, PortainerService],
})
export class CatalogModule {}
