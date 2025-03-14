import { DiscoveryScan } from "@customtypes/discoveryscan";
import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
class ServiceDefinition {
  @Prop({ index: true })
  name: string;

  @Prop()
  iconSlug: string;

  @Prop()
  iconCatalog: string;

  @Prop()
  containerName: string;

  @Prop()
  hostname: string;

  @Prop()
  ipaddress: string;

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

class ServiceDefinitionList {
  public services: ServiceDefinition[] = [];

  public created: Date;

  public static fromDiscoveryScan(input: DiscoveryScan): ServiceDefinitionList {
    const result: ServiceDefinitionList = new ServiceDefinitionList();
    input.entries.forEach((service) => {
      if (service.targetAddress && service.targetAddress != "") {
        const item: ServiceDefinition = new ServiceDefinition();
        item.available = service.available;
        if (item.available) {
          item.lastSeen = new Date();
        }
        item.project = service.project;
        item.name = service.name;
        item.containerName = service.containerName;
        item.hostname = service.hostname;
        item.proxy = "";
        item.iconCatalog = service.iconCatalog;
        item.iconSlug = service.iconSlug;
        item.monitor = true;
        item.uptime = true;
        if (service.sourceAddress) {
          item.proxy = service.sourceAddress.address;
          const net = service.ipAddresses.find((a) => {
            return a.network == service.sourceAddress.network;
          });
          if (net) {
            item.ipaddress = net.address;
          }
        }
        item.public = service.targetAddress;
        result.services.push(item);
      }
    });
    result.created = new Date();
    return result;
  }
}

export { ServiceDefinition, ServiceDefinitionList };
