import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { Network } from "../dto/network.dto";

export type NetworkDocument = HydratedDocument<Network>;

export const NetworkSchema = SchemaFactory.createForClass(Network);
