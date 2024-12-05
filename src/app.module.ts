import { AppController } from "@controllers/app.controller";
import { DiscoveryController } from "@controllers/discovery.controller";
import { ComposeController } from "@controllers/compose.controller";
import { DockerController } from "@controllers/docker.controller";
import { IconsController } from "@controllers/icons.controller";
import { NotificationService } from "@services/notification.service";
import { ViewsController } from "@controllers/views.controller";
import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { DiscoveryService } from "@services/discovery.service";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { DockerRepositoryService } from "@services/docker.repository.service";
import { DockerService } from "@services/docker.service";
import { DesktopService } from "@services/desktop.service";
import { ComposeService } from "@services/compose.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import { IconService } from "@services/icon.service";
import { ResourcesService } from "@services/resources.service";
import { ResourcesController } from "@controllers/resources.controller";
import { IconCDNService } from "@services/icon.cdn.service";
import { TasksService } from "@services/tasks.service";
import { LoggerModule } from "nestjs-pino";
import { MongooseModule } from "@nestjs/mongoose";
import configuration from "./config/configuration";
import {
  ServiceDefinition,
  ServiceDefinitionList,
} from "@customtypes/servicedefinition";
import {
  ServiceDefinitionDocument,
  ServiceDefinitionSchema,
} from "@schemas/servicedefinition.schema";
import { Icon, IconDocument, IconSchema } from "@schemas/icons.schema";
import {
  ContainerStats,
  ContainerStatsDocument,
  ContainerStatsSchema,
} from "@schemas/containerstats.schema";

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
      { name: ContainerStats.name, schema: ContainerStatsSchema },
      { name: Icon.name, schema: IconSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [
    ComposeController,
    DockerController,
    DiscoveryController,
    AppController,
    ViewsController,
    ResourcesController,
    IconsController,
  ],
  providers: [
    IconService,
    IconCDNService,
    DockerService,
    ResourcesService,
    DockerRepositoryService,
    DiscoveryService,
    ComposeService,
    NotificationService,
    FileDiscoveryService,
    DockerDiscoveryService,
    TasksService,
    DesktopService,
  ],
})
export class AppModule {}
