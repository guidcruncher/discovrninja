import { Body, Controller, Get, Post, Res } from "@nestjs/common";

import { Notification, NotificationService } from "./notification.service";

@Controller("/")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get("api/notification")
  getversion(@Res() res) {
    res.send();
  }

  @Post("api/notification/pushover")
  sendNotificationPushOver(@Body() data: Notification) {
    return this.notificationService.sendUsingPushover(
      data.recipients,
      "Message from DiscovrNinja",
      data.message,
    );
  }

  @Post("api/notification/apprise")
  sendNotificationApprise(@Body() data: Notification) {
    return this.notificationService.sendUsingApprise(
      data.recipients,
      data.message,
    );
  }
}
