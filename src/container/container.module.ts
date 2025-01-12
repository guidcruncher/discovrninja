import { CatalogModule } from "@catalog/catalog.module";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { DockerController } from "./docker.controller";
import { DockerService } from "./docker.service";
import { DockerRepositoryService } from "./docker-repository.service";

@Module({
  imports: [CatalogModule, DataModule, Schemas.CompileModels()],
  controllers: [DockerController],
  providers: [DockerService, DockerRepositoryService],
  exports: [DockerService],
})
export class ContainerModule {}
