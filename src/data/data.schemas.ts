import { ContainerCatalog,Template } from "@catalog/portainer-template.types";
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { MongooseModule } from "@nestjs/mongoose";
import { ContainerCatalogSchema } from "@schemas/containercatalog.schema";
import {
  ContainerStats,
  ContainerStatsSchema,
} from "@schemas/containerstats.schema";
import { Icon, IconSchema } from "@schemas/icons.schema";
import { TemplateSchema } from "@schemas/portainer.schema";
import { ServiceDefinitionSchema } from "@schemas/servicedefinition.schema";

export class Schemas {

public static CompileModels () {
  return MongooseModule.forFeature([
    { name: ServiceDefinition.name, schema: ServiceDefinitionSchema },
    { name: Template.name, schema: TemplateSchema },
    { name: ContainerStats.name, schema: ContainerStatsSchema },
    { name: Icon.name, schema: IconSchema },
    { name: ContainerCatalog.name, schema: ContainerCatalogSchema },
  ]);
}

}
