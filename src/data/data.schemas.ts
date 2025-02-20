import { ContainerCatalog, Template } from "@catalog/portainer-template.types";
import { ImageStorageStats } from "@data/dto/image-storagestats.dto";
import { Job } from "@data/dto/job.dto";
import { Network } from "@data/dto/network.dto";
import { ServiceDefinition } from "@data/dto/servicedefinition.dto";
import { Volume } from "@data/dto/volume.dto";
import { VolumeStorageStats } from "@data/dto/volume-storagestats.dto";
import { Webhook } from "@data/dto/webhook.dto";
import { ContainerCatalogSchema } from "@data/schemas/containercatalog.schema";
import {
  ContainerStats,
  ContainerStatsSchema,
} from "@data/schemas/containerstats.schema";
import { Icon, IconSchema } from "@data/schemas/icons.schema";
import { ImageStorageStatsSchema } from "@data/schemas/image-storagestats.schema";
import { JobSchema } from "@data/schemas/job.schema";
import { NetworkSchema } from "@data/schemas/network.schema";
import { TemplateSchema } from "@data/schemas/portainer.schema";
import { ServiceDefinitionSchema } from "@data/schemas/servicedefinition.schema";
import { VolumeSchema } from "@data/schemas/volume.schema";
import { VolumeStorageStatsSchema } from "@data/schemas/volume-storagestats.schema";
import { WebhookSchema } from "@data/schemas/webhook.schema";
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
      { name: Job.name, schema: JobSchema },
      { name: Webhook.name, schema: WebhookSchema },
    ]);
  }
}
