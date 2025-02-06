import { ConfigurationModule } from "@configuration/configuration.module";
import { Module } from "@nestjs/common";

import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";

@Module({
  imports: [ConfigurationModule],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [],
})
export class NotificationModule {}
