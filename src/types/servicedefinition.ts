import { DiscoveryScan } from "@customtypes/discoveryscan";
import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
class ServiceDefinition {
  @Prop()
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
  created: Date;

  @Prop()
  updated: Date;

  @Prop()
  edited: boolean;

  @Prop()
  archived: boolean;
}

class ServiceDefinitionList {
  public services: ServiceDefinition[] = [];

  public created: Date;

  public static fromDiscoveryScan(input: DiscoveryScan): ServiceDefinitionList {
    const result: ServiceDefinitionList = new ServiceDefinitionList();
    input.entries.forEach((service) => {
      if (service.targetAddress && service.targetAddress != "") {
        const item: ServiceDefinition = {
          name: "",
          ipaddress: "",
          containerName: "",
          hostname: "",
          proxy: "",
          public: "",
          iconCatalog: "",
          iconSlug: "",
          created: new Date(),
          updated: new Date(),
          edited: false,
          archived: false,
        };
        item.name = service.name;
        item.containerName = service.containerName;
        item.hostname = service.hostname;
        item.proxy = "";
        item.iconSlug = service.iconSlug;
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
