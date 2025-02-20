import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class ServiceDefinition {
  @Prop({ index: true })
  name: string;

  @Prop()
  iconSlug: string;

  @Prop()
  iconCatalog: string;

  iconUrl: string;

  @Prop()
  containerName: string;

  @Prop()
  hostname: string;

  @Prop()
  ipaddress: string;

  @Prop()
  ipaddresses: string[];

  @Prop()
  proxy: string;

  @Prop()
  public: string;

  @Prop()
  project: string;

  @Prop()
  firstSeen: Date;

  @Prop()
  created: Date;

  @Prop()
  updated: Date;

  @Prop()
  edited: boolean;

  @Prop()
  available: boolean;

  @Prop()
  lastSeen: Date;

  @Prop()
  lastPolled: Date;

  @Prop({ default: 0 })
  downtime: number;

  @Prop()
  archived: boolean;

  @Prop({ default: true })
  monitor: boolean;

  @Prop({ default: true })
  uptime: boolean;

  constructor() {
    this.monitor = true;
    this.uptime = true;
    this.name = "";
    this.ipaddress = "";
    this.containerName = "";
    this.hostname = "";
    this.proxy = "";
    this.public = "";
    this.ipaddresses = [];
    this.iconCatalog = "";
    this.iconSlug = "";
    this.created = new Date();
    this.updated = new Date();
    this.edited = false;
    this.archived = false;
    this.available = false;
    this.project = "";
    this.firstSeen = null;
    this.lastSeen = null;
    this.downtime = 0;
    this.lastPolled = null;
  }
}
