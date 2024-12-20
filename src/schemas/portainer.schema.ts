import {
  EnvSetting,
  RepositorySetting,
  Template,
  VolumeSetting,
} from "@customtypes/portainer-template";
import { SchemaFactory } from "@nestjs/mongoose";

export type EnvSettingDocument = HydratedDocumemt<EnvSetting>;
export type VolumeSettingDocument = HydratedDocumemt<VolumeSetting>;
export type RepositorySettingDocument = HydratedDocumemt<RepositorySetting>;
export type TemplateDocument = HydratedDocumemt<Template>;

export const VolumeSettingSchema = SchemaFactory.createForClass(VolumeSetting);

export const EnvSettingSchema = SchemaFactory.createForClass(EnvSetting);

export const RepositorySettingSchema =
  SchemaFactory.createForClass(RepositorySetting);

export const TemplateSchema = SchemaFactory.createForClass(Template);
