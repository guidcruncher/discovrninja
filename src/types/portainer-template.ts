import { Prop, Schema } from "@nestjs/mongoose";

export type Templates = Template[];

export class PortainerTemplate {
  version: string;

  templates: Templates;
}

export class Template {
  categories: string[];

  description: string;

  env?: EnvSetting[];

  image?: string;

  logo: string;

  name?: string;

  platform: string;

  ports?: string[];

  restart_policy?: string;

  title: string;

  type: number;

  volumes?: VolumeSetting[];

  note?: string;

  repository?: RepositorySetting;

  network?: string;
}

export class EnvSetting {
  label: string;

  name: string;

  default?: string;

  set?: string;

  description?: string;
}

export class VolumeSetting {
  bind?: string;

  container: string;
}

export class RepositorySetting {
  stackfile: string;

  url: string;
}

export class TemplateCreateRequest {
  template: Template;

  environment: any = {};
}

@Schema()
export class ContainerCatalog {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  dateCreated: Date;

  @Prop()
  dateUpdated: Date;
}
