import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerModule } from "nestjs-pino";

import { ContainerCatalogSchema } from "@schemas/containercatalog.schema";
import {
  ContainerStats,
  ContainerStatsSchema,
} from "@schemas/containerstats.schema";
import { Icon, IconSchema } from "@schemas/icons.schema";
import { TemplateSchema } from "@schemas/portainer.schema";
import { ServiceDefinitionSchema } from "@schemas/servicedefinition.schema";
import { ContainerCatalog } from "@customtypes/portainer-template";
import { Template } from "@customtypes/portainer-template";
import { ServiceDefinition } from "@customtypes/servicedefinition";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get("host.mongo.url"),
        dbName: "discovrninja",
      }),
    }),
    MongooseModule.forFeature([
      { name: ServiceDefinition.name, schema: ServiceDefinitionSchema },
      { name: Template.name, schema: TemplateSchema },
      { name: ContainerStats.name, schema: ContainerStatsSchema },
      { name: Icon.name, schema: IconSchema },
      { name: ContainerCatalog.name, schema: ContainerCatalogSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DataModule {}
