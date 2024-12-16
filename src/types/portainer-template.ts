import { Prop, Schema } from "@nestjs/mongoose";

export type Templates = Template[];

export class PortainerTemplate {
  version: string;
  templates: Templates;
}

@Schema()
export class Template {
@Prop()
 categories: string[];
@Prop()
  description: string;
@Prop()
  env?: Env[];
@Prop()
  image?: string;
@Prop()
  logo: string;
@Prop()
  name?: string;
@Prop()
  platform: string;
@Prop()
  ports?: string[];
@Prop()
  restart_policy?: string;
@Prop()
   title: string;
@Prop()
  type: number;
@Prop()
  volumes?: Volume[];
@Prop()
  note?: string;
@Prop()
  repository?: Repository;
@Prop()
  network?: string;

}

@Schema()
export class Env {
@Prop()
  label: string;
@Prop()
  name: string;
@Prop()
  default?: string;
@Prop()
  set?: string;
@Prop()
  description?: string;
}

@Schema()
export class Volume {
@Prop()
  bind?: string;
@Prop()
  container: string;
}

@Schema()
export class Repository {

@Prop()
  stackfile: string;
@Prop()
  url: string;
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

