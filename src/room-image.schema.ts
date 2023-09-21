import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RawImageDocument = HydratedDocument<RoomImage>;

@Schema()
export class RoomImage {
  @Prop({ required: true })
  roomId: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: false })
  image: string;
}

export const RoomImageSchema = SchemaFactory.createForClass(RoomImage);
