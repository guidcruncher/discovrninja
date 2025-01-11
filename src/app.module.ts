
import { AuthModule } from "@auth/auth.module";
import { AppController } from "@controllers/app.controller";
import { DiscoveryController } from "@controllers/discovery.controller";
import { DockerController } from "@controllers/docker.controller";
import { IconsController } from "@controllers/icons.controller";
import { ResourcesController } from "@controllers/resources.controller";
import { ViewsController } from "@controllers/views.controller";
import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { DiscoveryService } from "@services/discovery.service";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { DockerRepositoryService } from "@services/docker.repository.service";
import { DockerService } from "@services/docker.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import { IconCDNService } from "@services/icon.cdn.service";
import { IconService } from "@services/icon.service";
import { NotificationService } from "@services/notification.service";
import { ResourcesService } from "@services/resources.service";
import { TasksService } from "@services/tasks.service";
import { UsersModule } from "@users/users.module";

import { CatalogModule } from "./catalog/catalog.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ContainerModule } from "./container/container.module";
import { DataModule } from "./data/data.module";
import { DesktopModule } from "./desktop/desktop.module";
import { ProjectModule } from "./project/project.module";
import { ResourcesModule } from "./resources/resources.module";

/**
 * This is the main application module
 */
@Global()
@Module({
  imports: [
    ConfigurationModule,
    DataModule,
    ScheduleModule.forRoot(),
    UsersModule,
    AuthModule,
    DesktopModule,
    CatalogModule,
    ProjectModule,
    ContainerModule,
    ResourcesModule,
  ],
  controllers: [
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
    FileDiscoveryService,
    DockerDiscoveryService,
    DiscoveryService,
    DockerRepositoryService,
    DockerService,
    ResourcesService,
    NotificationService,
    TasksService,
  ],
  exports: [IconService, ResourcesService, DockerService ],
})
export class AppModule {}
