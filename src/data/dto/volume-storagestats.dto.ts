import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class VolumeStorageStats {
  @Prop()
  written: Date;

  @Prop()
  Name: string;

  @Prop()
  Mountpoint: string;

  @Prop()
  Size: number;

  static Create(input: any): VolumeStorageStats {
    const value: VolumeStorageStats = new VolumeStorageStats();
    value.written = new Date();
    value.Name = input.Name;
    value.Mountpoint = input.Mountpoint;
    value.Size = 0;
    if (input.UsageData) {
      value.Size = input.UsageData.Size;
    }
    return value;
  }
}
