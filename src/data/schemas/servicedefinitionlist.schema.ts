import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ServiceDefinitionListDocument =
  HydratedDocument<ServiceDefinitionList>;

export const ServiceDefinitionListSchema = SchemaFactory.createForClass(
  ServiceDefinitionList,
);
