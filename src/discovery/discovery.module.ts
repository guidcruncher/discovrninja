import { DataModule } from "@data/data.module";
import { ContainerModule } from "@container/container.module";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";

import { DiscoveryController } from "./discovery.controller";
import { DiscoveryService } from "./discovery.service";
import { DockerDiscoveryService } from "./docker-discovery.service";
import { FileDiscoveryService } from "./file-discovery.service";

@Module({
  imports: [DataModule, Schemas.CompileModels(), ContainerModule],
  controllers: [DiscoveryController],
  providers: [DiscoveryService, DockerDiscoveryService, FileDiscoveryService],
  exports: [DiscoveryService],
})
export class DiscoveryModule {}
