import { AuthModule } from "@auth/auth.module";
import { CatalogModule } from "@catalog/catalog.module";
import { ConfigurationModule } from "@configuration/configuration.module";
import { ContainerModule } from "@container/container.module";
import { DataModule } from "@data/data.module";
import { DesktopModule } from "@desktop/desktop.module";
import { DiscoveryModule } from "@discovery/discovery.module";
import { IconModule } from "@icon/icon.module";
import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ResourcesModule } from "@resources/resources.module";
import { UsersModule } from "@users/users.module";

import { AppController } from "./app.controller";
import { NotificationService } from "./notification.service";
import { TasksService } from "./tasks.service";
import { ViewsController } from "./views.controller";

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
  controllers: [AppController, ViewsController],
  providers: [NotificationService, TasksService],
  exports: [],
})
export class AppModule {}
