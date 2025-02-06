import { ContainerCatalog, Template } from "@catalog/portainer-template.types";
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { ImageStorageStats } from "@data/dto/image-storagestats.dto";
import { Network } from "@data/dto/network.dto";
import { Volume } from "@data/dto/volume.dto";
import { VolumeStorageStats } from "@data/dto/volume-storagestats.dto";
import { ContainerCatalogSchema } from "@data/schemas/containercatalog.schema";
import {
  ContainerStats,
  ContainerStatsSchema,
} from "@data/schemas/containerstats.schema";
import { Icon, IconSchema } from "@data/schemas/icons.schema";
import { ImageStorageStatsSchema } from "@data/schemas/image-storagestats.schema";
import { NetworkSchema } from "@data/schemas/network.schema";
import { TemplateSchema } from "@data/schemas/portainer.schema";
import { ServiceDefinitionSchema } from "@data/schemas/servicedefinition.schema";
import { VolumeSchema } from "@data/schemas/volume.schema";
import { VolumeStorageStatsSchema } from "@data/schemas/volume-storagestats.schema";
import { MongooseModule } from "@nestjs/mongoose";

export class Schemas {
  public static CompileModels() {
    return MongooseModule.forFeature([
      { name: ServiceDefinition.name, schema: ServiceDefinitionSchema },
      { name: Template.name, schema: TemplateSchema },
      { name: ContainerStats.name, schema: ContainerStatsSchema },
      { name: Icon.name, schema: IconSchema },
      { name: ImageStorageStats.name, schema: ImageStorageStatsSchema },
      { name: VolumeStorageStats.name, schema: VolumeStorageStatsSchema },
      { name: ContainerCatalog.name, schema: ContainerCatalogSchema },
      { name: Network.name, schema: NetworkSchema },
      { name: Volume.name, schema: VolumeSchema },
    ]);
  }
}
