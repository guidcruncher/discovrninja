import { AppController } from "@controllers/app.controller";
import { ComposeController } from "@controllers/compose.controller";
import { DesktopController } from "@controllers/desktop.controller";
import { DiscoveryController } from "@controllers/discovery.controller";
import { DockerController } from "@controllers/docker.controller";
import { IconsController } from "@controllers/icons.controller";
import { LinkdingController } from "@controllers/linkding.controller";
import { PortainerController } from "@controllers/portainer.controller";
import { ResourcesController } from "@controllers/resources.controller";
import { ViewsController } from "@controllers/views.controller";
import { ContainerCatalog } from "@customtypes/portainer-template";
import { Template } from "@customtypes/portainer-template";
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { ContainerCatalogSchema } from "@schemas/containercatalog.schema";
import {
  ContainerStats,
  ContainerStatsSchema,
} from "@schemas/containerstats.schema";
import { Icon, IconSchema } from "@schemas/icons.schema";
import { TemplateSchema } from "@schemas/portainer.schema";
import { ServiceDefinitionSchema } from "@schemas/servicedefinition.schema";
import { ComposeService } from "@services/compose.service";
import { DesktopService } from "@services/desktop.service";
import { DiscoveryService } from "@services/discovery.service";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { DockerRepositoryService } from "@services/docker.repository.service";
import { DockerService } from "@services/docker.service";
import { LinkdingService } from "@services/ext.linkding.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import { IconCDNService } from "@services/icon.cdn.service";
import { IconService } from "@services/icon.service";
import { NotificationService } from "@services/notification.service";
import { PortainerService } from "@services/portainer.service";
import { ResourcesService } from "@services/resources.service";
import { TasksService } from "@services/tasks.service";
import { LoggerModule } from "nestjs-pino";

import configuration from "./config/configuration";

/**
 * This is the main application module
 */
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: {
            transport: {
              target: "pino-pretty",
              options: { singleLine: true },
            },
            useLevel: config.get("host.logging.level"),
          },
        };
      },
    }),
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
    ScheduleModule.forRoot(),
  ],
  controllers: [
    ComposeController,
    DesktopController,
    DockerController,
    DiscoveryController,
    AppController,
    PortainerController,
    ViewsController,
    ResourcesController,
    LinkdingController,
    IconsController,
  ],
  providers: [
    IconService,
    IconCDNService,
    FileDiscoveryService,
    DockerDiscoveryService,
    DiscoveryService,
    DockerRepositoryService,
    DockerService,
    ResourcesService,
    PortainerService,
    ComposeService,
    LinkdingService,
    NotificationService,
    TasksService,
    DesktopService,
  ],
})
export class AppModule {}
