import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    default: uuidv4
  })
  user_id: string;

  @Prop({ required: true })
  display_name: string;

  @Prop({ required: true })
  country: string;

  @Prop({
    default: 0
  })
  points: number;

  @Prop({
    default: 0
  })
  rank: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
