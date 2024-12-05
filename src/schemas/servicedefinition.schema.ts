import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {
  ServiceDefinition,
  ServiceDefinitionList,
} from "@customtypes/servicedefinition";

export type ServiceDefinitionDocument = HydratedDocument<ServiceDefinition>;

export const ServiceDefinitionSchema =
  SchemaFactory.createForClass(ServiceDefinition);
