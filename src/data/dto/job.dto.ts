import { CryptoHelper } from "@helpers/cryptohelper";
import { Prop, Schema } from "@nestjs/mongoose";

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
  Category: string;

  @Prop()
  Finished: boolean;

  constructor() {
    this.Id = CryptoHelper.generateId();
    this.CreatedAt = new Date();
    this.State = "";
    this.Finished = false;
  }
}
