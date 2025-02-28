import { AuthModule } from "@auth/auth.module";
import { CatalogModule } from "@catalog/catalog.module";
import { ConfigurationModule } from "@configuration/configuration.module";
import { ContainerModule } from "@container/container.module";
import { MongoConnection } from "@data/data.connection";
import { DataModule } from "@data/data.module";
import { Schemas } from "@data/data.schemas";
import { DesktopModule } from "@desktop/desktop.module";
import { DiscoveryModule } from "@discovery/discovery.module";
import { IconModule } from "@icon/icon.module";
import { Global, Logger, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { HttpAdapterHost } from "@nestjs/core";
import { ScheduleModule } from "@nestjs/schedule";
import { NotificationModule } from "@notification/notification.module";
import { ResourcesModule } from "@resources/resources.module";
import { UsersModule } from "@users/users.module";

import { AppController } from "./app.controller";
import { LoggingInterceptor } from "./logging.interceptor";
import { SystemService } from "./system.service";
import { TasksService } from "./tasks.service";
import { ViewsController } from "./views.controller";

/**
 * This is the main application module
 */
@Global()
@Module({
  imports: [
    MongoConnection.setup(),
    Schemas.CompileModels(),
    ConfigurationModule,
    DataModule,
    ScheduleModule.forRoot(),
    UsersModule,
    AuthModule,
    DesktopModule,
    CatalogModule,
    ContainerModule,
    NotificationModule,
    ResourcesModule,
    IconModule,
    DiscoveryModule,
  ],
  controllers: [AppController, ViewsController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    TasksService,
    SystemService,
  ],
  exports: [],
})
export class AppModule {
  private logger: Logger = new Logger(AppModule.name);

  constructor(
    readonly httpAdapterHost: HttpAdapterHost,
    readonly tasksService: TasksService,
  ) {
    httpAdapterHost.listen$.subscribe({
      complete: () => this.onHttpServerListening(),
    });
  }

  async onHttpServerListening(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.logger.debug("HTTP Server is listening");
      this.logger.debug("Starting initial job tasks");
      this.tasksService
        .initialJobs()
        .then(() => {
          this.logger.debug("Finished running initial job tasks");
          resolve();
        })
        .catch((err) => {
          this.logger.error("Error running initial job tasks", err);
          reject(err);
        });
    });
  }
}
