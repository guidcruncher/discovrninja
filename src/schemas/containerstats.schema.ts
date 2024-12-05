import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class ContainerStats {
  @Prop()
  name: string;

  @Prop()
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
