import { ServiceDefinition } from "@customtypes/servicedefinition";
import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ServiceDefinitionDocument = HydratedDocument<ServiceDefinition>;

export const ServiceDefinitionSchema =
  SchemaFactory.createForClass(ServiceDefinition);
