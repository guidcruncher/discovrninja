import { Prop, Schema } from "@nestjs/mongoose";
import * as crypto from "crypto";

@Schema()
export class EnvSetting {
  @Prop()
  label: string;

  @Prop()
  name: string;

  @Prop()
  default: string;

  @Prop()
  set: string;

  @Prop()
  description: string;

  constructor() {
    this.name = "";
    this.description = "";
    this["set"] = "";
    this["default"] = "";
  }
}

@Schema()
export class VolumeSetting {
  @Prop()
  bind: string;

  @Prop()
  container: string;

  constructor() {
    this.bind = "";
    this.container = "";
  }
}

@Schema()
export class RepositorySetting {
  @Prop()
  stackfile: string;

  @Prop()
  url: string;

  constructor() {
    this.stackfile = "";
    this.url = "";
  }
}

@Schema()
export class Template {
  @Prop({ index: true })
  catalogId: string;

  @Prop()
  categories: string[];

  @Prop()
  description: string;

  descriptionMD: string;

  noteMD: string;

  @Prop({ type: () => [EnvSetting] })
  env: EnvSetting[];

  @Prop()
  image: string;

  @Prop()
  logo: string;

  @Prop()
  name: string;

  @Prop()
  platform: string;

  @Prop()
  ports: string[];

  @Prop()
  restart_policy: string;

  @Prop()
  title: string;

  @Prop()
  type: number;

  @Prop({ type: () => [VolumeSetting] })
  volumes: VolumeSetting[];

  @Prop()
  note: string;

  @Prop({ type: () => RepositorySetting })
  repository: RepositorySetting;

  @Prop()
  network: string;

  hostname: string;

  projectname: string;

  constructor() {
    this.projectname = "";
    this.hostname = "";
    this.catalogId = "";
    this.categories = [];
    this.description = "";
    this.env = [];
    this.image = "";
    this.logo = "";
    this.name = "";
    this.platform = "";
    this.ports = [];
    this.restart_policy = "";
    this.title = "";
    this.type = 0;
    this.volumes = [];
    this.note = "";
    this.repository = new RepositorySetting();
    this.network = "";
  }
}

export class TemplateCreateRequest {
  template: Template;

  environment: any = {};

  launchOnSave: boolean;

  constructor() {
    this.template = new Template();
    this.environment = {};
    this.launchOnSave = false;
  }
}

export class TemplateCreateResponse {
  cmd: string;

  serviceUrl: string;

  publicUrl: string;

  environment: string;
}

export type Templates = Template[];

export class PortainerTemplate {
  version: string;

  templates: Templates;
}

export class TemplateCatalog {
  templates: Templates = [];

  categories: any = {};

  constructor() {
    this.templates = [];
    this.categories = {};
  }
}

@Schema()
export class ContainerCatalog {
  @Prop({ index: true, unique: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  dateCreated: Date;

  @Prop()
  dateUpdated: Date;

  constructor() {
    this.name = "";
    this.url = "";
    this.dateCreated = new Date();
    this.dateUpdated = this.dateCreated;
    this.id = crypto.randomBytes(16).toString("hex");
  }
}
