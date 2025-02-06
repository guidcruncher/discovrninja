import { ContainerCatalog } from "@catalog/portainer-template.types";
import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ContainerCatalogDocument = HydratedDocument<ContainerCatalog>;

export const ContainerCatalogSchema =
  SchemaFactory.createForClass(ContainerCatalog);
