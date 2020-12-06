import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop({
    default: uuidv4,
  })
  user_id: string;

  @ApiProperty()
  @Prop({ required: true })
  display_name: string;

  @ApiProperty()
  @Prop({ required: true })
  country: string;

  @ApiProperty()
  @Prop({
    default: 0,
  })
  points: number;

  @ApiProperty()
  @Prop({
    default: 0,
  })
  rank: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
