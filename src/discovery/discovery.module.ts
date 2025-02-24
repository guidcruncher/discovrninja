import { ConfigurationModule } from "@configuration/configuration.module";
import { ContainerModule } from "@container/container.module";
import { MongoConnection } from "@data/data.connection";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { IconModule } from "@icon/icon.module";
import { Module } from "@nestjs/common";

import { AdapterService } from "./adapter.service";
import { CaddyService } from "./caddy.service";
import { DiscoveryController } from "./discovery.controller";
import { DiscoveryService } from "./discovery.service";
import { DnsmasqService } from "./dnsmasq.service";
import { DockerDiscoveryService } from "./docker-discovery.service";
import { FileDiscoveryService } from "./file-discovery.service";
import { NetworkDiscoveryService } from './network-discovery.service';

@Module({
  imports: [
    ConfigurationModule,
    IconModule,
    DataModule,
    MongoConnection.setup(),
    Schemas.CompileModels(),
    ContainerModule,
  ],
  controllers: [DiscoveryController],
  providers: [
    DiscoveryService,
    DockerDiscoveryService,
    FileDiscoveryService,
    DnsmasqService,
    CaddyService,
    AdapterService,
    NetworkDiscoveryService,
  ],
  exports: [DiscoveryService],
})
export class DiscoveryModule {}
