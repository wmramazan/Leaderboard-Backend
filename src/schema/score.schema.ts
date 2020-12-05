import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  score_worth: number;

  @Prop({
    default: Date.now()
  })
  timestamp: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
