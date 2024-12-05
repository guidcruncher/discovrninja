import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpUtilities } from "@helpers/httputilities";

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(private configService: ConfigService) {}

  public send(recipients: string[], body: string): Promise<any> {
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
          this.logger.error("Error sending notification", err);
          reject(err);
        });
    });
  }
}
