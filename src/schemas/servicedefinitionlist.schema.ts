import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {
  ServiceDefinition,
  ServiceDefinitionList,
} from "@customtypes/servicedefinition";

export type ServiceDefinitionListDocument =
  HydratedDocument<ServiceDefinitionList>;

export const ServiceDefinitionListSchema = SchemaFactory.createForClass(
  ServiceDefinitionList,
);
