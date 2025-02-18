import { Prop, Schema } from "@nestjs/mongoose";
import * as crypto from "crypto";

@Schema()
export class Webhook {
  @Prop()
  CreatedAt: Date;

  @Prop()
  Id: string;

  @Prop()
  Name: string;

  @Prop()
  Enabled: boolean;

  constructor() {
    this.Id = crypto.randomBytes(16).toString("hex");
    this.CreatedAt = new Date();
    this.Name = "";
    this.Enabled = false;
  }
}
