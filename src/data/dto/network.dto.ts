import { Prop, Schema } from "@nestjs/mongoose";

export class IPAM {
  @Prop({ Type: String })
  Driver: string;

  @Prop({ type: Array })
  Config: any[];

  @Prop({ Type: Array })
  Options: any[];

  constructor() {
    this.Driver = "default";
    this.Config = [];
    this.Config.push(this.addConfig());
  }

  public addConfig(): any {
    return {
      Subnet: "",
      IPRange: "",
      Gateway: "",
    };
  }

  public addOption(name: string, value: string): any {
    const result: any = {};
    result[name] = value;
    return result;
  }
}

export class NetworkContainer {
  @Prop({ default: "" })
  Name: string;

  @Prop({ default: "" })
  IpAddress: string;
}

@Schema()
export class Network {
  live: boolean;

  @Prop()
  Name: string;

  @Prop({ Type: Date })
  Created: Date;

  @Prop()
  Id: string;

  @Prop()
  Driver: string;

  @Prop()
  Scope: string;

  @Prop()
  Internal: boolean;

  @Prop()
  Attachable: boolean;

  @Prop()
  Ingress: boolean;

  @Prop({ Type: IPAM })
  IPAM: IPAM;

  @Prop()
  EnableIPv6: boolean;

  @Prop({ Type: Object })
  Options: Map<string, string>;

  @Prop({ Type: Object })
  Labels: Map<string, string>;

  @Prop({ Default: false })
  edited: boolean;

  @Prop({ Type: Array })
  AttachedContainers: NetworkContainer[];

  constructor() {
    this.Driver = "";
    this.Scope = "local";

    this.IPAM = new IPAM();
  }
}
