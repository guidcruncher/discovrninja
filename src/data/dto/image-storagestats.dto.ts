import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class ImageStorageStats {
  @Prop()
  written: Date;

  @Prop()
  Containers: string;

  @Prop()
  Created: Date;

  @Prop()
  Id: string;

  @Prop()
  Name: string;

  @Prop()
  RepoTags: string[];

  @Prop()
  SharedSize: number;

  @Prop()
  Size: number;

  @Prop()
  Title: string;

  @Prop()
  Description: string;

  @Prop()
  Documentation: string;

  @Prop()
  Url: string;

  static Create(input: any): ImageStorageStats {
    const value: ImageStorageStats = new ImageStorageStats();
    value.written = new Date();
    if (input.Labels) {
      value.Title = input.Labels["org.opencontainers.image.title"] ?? "";
      value.Description =
        input.Labels["org.opencontainers.image.description"] ?? "";
      value.Documentation =
        input.Labels["org.opencontainers.image.documentation"] ?? "";
      value.Url = input.Labels["org.opencontainers.image.url"] ?? "";
    }

    value.RepoTags = [];
    value.Name = "";
    if (input.RepoTags) {
      if (input.RepoTags.length > 0) {
        value.RepoTags = input.RepoTags.sort();
        value.Name = value.RepoTags[0];
      }
    }
    value.Containers = input.Containers;
    value.Created = new Date(input.Created * 1000);
    value.Id = input.Id;
    value.SharedSize = input.SharedSize;
    value.Size = input.Size;
    return value;
  }
}
