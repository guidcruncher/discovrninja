import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class ContainerStats {
  @Prop({ index: true })
  name: string;

  @Prop({ index: true })
  created: Date;

  @Prop({ Type: Date, expires: 5 })
  expireAt: Date;

  @Prop()
  cpuPercent: number;

  @Prop()
  memoryUsage: number;

  @Prop()
  memoryFreePercent: number;

  @Prop()
  memoryLimit: number;

  constructor() {
    this.created = new Date();
    this.expireAt = new Date();
    this.expireAt.setDate(this.created.getDate() + 10);
  }
}

export type ContainerStatsDocument = HydratedDocument<ContainerStats>;

export const ContainerStatsSchema =
  SchemaFactory.createForClass(ContainerStats);
