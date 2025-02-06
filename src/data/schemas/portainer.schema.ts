import {
  EnvSetting,
  RepositorySetting,
  Template,
  VolumeSetting,
} from "@catalog/portainer-template.types";
import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EnvSettingDocument = HydratedDocument<EnvSetting>;
export type VolumeSettingDocument = HydratedDocument<VolumeSetting>;
export type RepositorySettingDocument = HydratedDocument<RepositorySetting>;
export type TemplateDocument = HydratedDocument<Template>;

export const VolumeSettingSchema = SchemaFactory.createForClass(VolumeSetting);

export const EnvSettingSchema = SchemaFactory.createForClass(EnvSetting);

export const RepositorySettingSchema =
  SchemaFactory.createForClass(RepositorySetting);

export const TemplateSchema = SchemaFactory.createForClass(Template);
