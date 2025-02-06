import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Volume {
  @Prop()
  CreatedAt: Date;

  @Prop()
  Driver: string;

  @Prop({ Type: Object })
  Labels: Map<string, string>;

  @Prop()
  Mountpoint: string;

  @Prop()
  CustomMountpoint: string;

  @Prop()
  Name: string;

  @Prop({ Type: Object })
  Options: Map<string, string>;

  @Prop()
  Scope: string;

  @Prop()
  Id: string;

  constructor() {
    this.Id = "";
    this.CreatedAt = new Date();
    this.Driver = "local";
    this.Mountpoint = "";
    this.Name = "";
    this.Scope = "local";
    this.Labels = new Map<string, string>();
    this.Labels["guidcruncher.dockerbackup.exclude"] = "false";
    this.Options = new Map<string, string>();
    this.CustomMountpoint = "";
  }
}
