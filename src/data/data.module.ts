import { MongoConnection } from "@data/data.connection";
import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { NetworkService } from "./network.service";
import { ServiceDefinitionService } from "./service-definition.service";
import { StorageService } from "./storage.service";
import { StorageStatsService } from "./storage-stats.service";

@Module({
  imports: [MongoConnection.setup(), Schemas.CompileModels()],
  controllers: [],
  providers: [
    MongoConnection,
    ServiceDefinitionService,
    StorageStatsService,
    NetworkService,
    StorageService,
  ],
  exports: [
    MongoConnection,
    MongooseModule,
    ServiceDefinitionService,
    StorageStatsService,
    StorageService,
    NetworkService,
  ],
})
export class DataModule {}
