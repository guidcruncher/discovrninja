import { HttpUtilities } from "@helpers/httputilities";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(private configService: ConfigService) {}

  public sendUsingPushover(
    users: string[],
    title: string,
    message: string,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const client = new HttpUtilities();
      const apiUrl = "https://api.pushover.net/1/messages.json";
      const promises = [];
      let userTokens: string[] = users;

      if (users.length == 0) {
        userTokens = this.configService.get("notifications.pushover.deliverTo");
      }

      userTokens.forEach((userToken) => {
        let payload =
          "token=" +
          encodeURIComponent(
            this.configService.get("notifications.pushover.apiToken"),
          );
        payload += "&user=" + encodeURIComponent(userToken);
        payload += "&title=" + encodeURIComponent(title);
        payload += "&message=" + encodeURIComponent(message);
        promises.push(client.send("POST", apiUrl, payload));
      });

      Promise.allSettled(promises)
        .then((result) => {
          resolve(true);
        })
        .catch((err) => {
          this.logger.error("Error sending Pushover notification", err);
          reject(err);
        });
    });
  }

  public sendUsingApprise(recipients: string[], body: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const client = new HttpUtilities();
      const apiUrl =
        this.configService.get("notifications.apprise.apiUrl") + "/notify";
      let payload = "urls=" + encodeURIComponent(recipients.join(",")) + "&";
      payload += "body=" + encodeURIComponent(body);

      client
        .send("POST", apiUrl, payload)
        .then((result) => {
          resolve(true);
        })
        .catch((err) => {
          this.logger.error("Error sending Apprise notification", err);
          reject(err);
        });
    });
  }
}
