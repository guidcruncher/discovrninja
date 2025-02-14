// import { CatalogModule } from "@catalog/catalog.module";
import { MongoConnection } from "@data/data.connection";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { DockerController } from "./docker.controller";
import { DockerService } from "./docker.service";
import { DockerConnectorService } from "./docker-connector.service";
import { DockerNetworkController } from "./docker-network.controller";
import { DockerNetworkService } from "./docker-network.service";
import { DockerRepositoryService } from "./docker-repository.service";
import { DockerStorageController } from "./docker-storage.controller";
import { DockerStorageService } from "./docker-storage.service";
import { DockerSystemService } from "./docker-system.service";
import { NetworkScriptService } from "./network-script.service";
import { StorageScriptService } from "./storage-script.service";
import { ImageUpdateService } from "./image-update.service";
import { DockerImageController } from './docker-image.controller';

@Module({
  imports: [
    //    CatalogModule,
    DataModule,
    MongoConnection.setup(),
    Schemas.CompileModels(),
  ],
  controllers: [
    DockerController,
    DockerStorageController,
    DockerNetworkController,
    DockerImageController,
  ],
  providers: [
    DockerService,
    DockerRepositoryService,
    DockerNetworkService,
    DockerStorageService,
    DockerConnectorService,
    NetworkScriptService,
    DockerSystemService,
    StorageScriptService,
    ImageUpdateService,
  ],
  exports: [DockerConnectorService, DockerService],
})
export class ContainerModule {}
