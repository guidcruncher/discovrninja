import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { Volume } from "../dto/volume.dto";

export type VolumeDocument = HydratedDocument<Volume>;

export const VolumeSchema = SchemaFactory.createForClass(Volume);
