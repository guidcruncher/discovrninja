import { Prop, Schema } from "@nestjs/mongoose";
import { CryptoHelper } from "@helpers/cryptohelper";

export class WebhookPayload {
  @Prop()
  Id: string;

  @Prop()
  Message: string;

  @Prop()
  CreatedAt: Date;

  constructor() {
    this.Id = this.Id = CryptoHelper.generateId();
    this.Message = "";
    this.CreatedAt = new Date();
  }
}

Schema();
export class Webhook {
  @Prop()
  CreatedAt: Date;

  @Prop()
  LastInvoked: Date;

  @Prop()
  UpdatedAt: Date;

  @Prop({ Type: Object })
  Lastpayload: WebhookPayload;

  @Prop()
  Id: string;

  @Prop()
  HMACAlgorithm: string;

  @Prop()
  HMACSecret: string;

  @Prop()
  Name: string;

  @Prop()
  Direction: string;

  @Prop()
  TargetUrl: string;

  @Prop()
  Enabled: boolean;

  constructor() {
    this.Id = CryptoHelper.generateId();
    this.CreatedAt = new Date();
    this.Name = "";
    this.Direction = "Outbound";
    this.TargetUrl = "";
    this.HMACAlgorithm = "";
    this.HMACSecret = CryptoHelper.generateId();
  }
}
