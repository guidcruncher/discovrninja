import { Prop, Schema } from "@nestjs/mongoose";
import * as crypto from "crypto";

@Schema()
export class Job {
  @Prop()
  CreatedAt: Date;

  @Prop()
  StartedAt: Date;

  @Prop()
  FinishedAt: Date;

  @Prop()
  Id: string;

  @Prop()
  State: string;

  @Prop()
  Finished: boolean;

  constructor() {
    this.Id = crypto.randomBytes(16).toString("hex");
    this.CreatedAt = new Date();
    this.State = "";
    this.Finished = false;
  }
}
