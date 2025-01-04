import { ContainerCatalog } from "@customtypes/portainer-template";
import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ContainerCatalogDocument = HydratedDocument<ContainerCatalog>;

export const ContainerCatalogSchema =
  SchemaFactory.createForClass(ContainerCatalog);
