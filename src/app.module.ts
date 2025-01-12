import { AuthModule } from "@auth/auth.module";
import { AppController } from "@controllers/app.controller";
import { ResourcesController } from "@controllers/resources.controller";
import { ViewsController } from "@controllers/views.controller";
import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { NotificationService } from "@services/notification.service";
import { ResourcesService } from "@services/resources.service";
import { TasksService } from "@services/tasks.service";
import { UsersModule } from "@users/users.module";

import { CatalogModule } from "./catalog/catalog.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ContainerModule } from "./container/container.module";
import { DataModule } from "./data/data.module";
import { DesktopModule } from "./desktop/desktop.module";
import { DiscoveryModule } from "./discovery/discovery.module";
import { IconModule } from "./icon/icon.module";
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
    IconModule,
    DiscoveryModule,
  ],
  controllers: [AppController, ViewsController, ResourcesController],
  providers: [ResourcesService, NotificationService, TasksService],
  exports: [ResourcesService],
})
export class AppModule {}
