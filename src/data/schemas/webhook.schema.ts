import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { Webhook } from "../dto/webhook.dto";

export type WebhookDocument = HydratedDocument<Webhook>;

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
