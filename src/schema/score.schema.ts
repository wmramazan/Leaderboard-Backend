import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @ApiProperty()
  @Prop({ required: true })
  user_id: string;

  @ApiProperty()
  @Prop({ required: true })
  score_worth: number;

  @ApiProperty()
  @Prop({
    default: Date.now()
  })
  timestamp: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
