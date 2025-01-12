import { AuthModule } from "@auth/auth.module";
import { AppController } from "./app.controller";
import { ViewsController } from "./views.controller";
import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { NotificationService } from "./notification.service";
import { TasksService } from "./tasks.service";
import { UsersModule } from "@users/users.module";

import { CatalogModule } from "@catalog/catalog.module";
import { ConfigurationModule } from "@configuration/configuration.module";
import { ContainerModule } from "@container/container.module";
import { DataModule } from "@data/data.module";
import { DesktopModule } from "@desktop/desktop.module";
import { DiscoveryModule } from "@discovery/discovery.module";
import { IconModule } from "@icon/icon.module";
import { ResourcesModule } from "@resources/resources.module";

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
