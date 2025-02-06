import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { ImageStorageStats } from "../dto/image-storagestats.dto";

export type ImageStorageStatsDocument = HydratedDocument<ImageStorageStats>;

export const ImageStorageStatsSchema =
  SchemaFactory.createForClass(ImageStorageStats);
