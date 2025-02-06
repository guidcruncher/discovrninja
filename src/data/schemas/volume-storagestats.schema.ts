import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { VolumeStorageStats } from "../dto/volume-storagestats.dto";

export type VolumeStorageStatsDocument = HydratedDocument<VolumeStorageStats>;

export const VolumeStorageStatsSchema =
  SchemaFactory.createForClass(VolumeStorageStats);
