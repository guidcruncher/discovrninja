import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";
import { Webhook, WebhookPayload } from "@data/dto/webhook.dto";
import { CryptoHelper } from "@helpers/cryptohelper";

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  constructor(
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
    @InjectModel(Webhook.name)
    private webhookModel: Model<Webhook>,
  ) {}

  public create(webhook: Webhook): Promise<Webhook> {
    return new Promise<Webhook>((resolve, reject) => {
      webhook.CreatedAt = new Date();
      this.webhookModel
        .create(webhook)
        .then((result) => {
          resolve(webhook);
        })
        .catch((err) => {
          this.logger.error("Error creating Webhook", err);
          reject(err);
        });
    });
  }

  public update(webhook: Webhook): Promise<Webhook> {
    return new Promise<Webhook>((resolve, reject) => {
      webhook.UpdatedAt = new Date();
      this.webhookModel
        .findOneAndUpdate({ Id: webhook.Id }, webhook, { upsert: false })
        .then((result) => {
          resolve(webhook);
        })
        .catch((err) => {
          this.logger.error("Error updating Webhook", err);
          reject(err);
        });
    });
  }

  public invoked(Id: string, payload: WebhookPayload): Promise<Webhook> {
    return new Promise<Webhook>((resolve, reject) => {
      this.get(Id)
        .then((webhook) => {
          webhook.LastInvoked = new Date();
          webhook.Lastpayload = payload;
          this.update(webhook)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error in invoked update", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error in invoked", err);
          reject(err);
        });
    });
  }

  public get(Id: string): Promise<Webhook> {
    return new Promise<Webhook>((resolve, reject) => {
      this.webhookModel
        .findOne({ Id: Id })
        .lean()
        .exec()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error getting Webhook", err);
          reject(err);
        });
    });
  }

  public delete(Id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.webhookModel
        .deleteOne({ Id: Id })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error deleting Webhook", err);
          reject(err);
        });
    });
  }
}
