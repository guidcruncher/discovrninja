import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Icon {
  @Prop({ index: true })
  catalog: string;

  @Prop()
  slug: string;

  @Prop()
  created: Date;
}

export type IconDocument = HydratedDocument<Icon>;

export const IconSchema = SchemaFactory.createForClass(Icon);
