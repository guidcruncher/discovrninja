import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class ContainerStats {
  @Prop({ index: true })
  name: string;

  @Prop({ index: true })
  created: Date;

  @Prop()
  cpuPercent: number;

  @Prop()
  memoryUsage: number;

  @Prop()
  memoryFreePercent: number;

  @Prop()
  memoryLimit: number;
}

export type ContainerStatsDocument = HydratedDocument<ContainerStats>;

export const ContainerStatsSchema =
  SchemaFactory.createForClass(ContainerStats);
