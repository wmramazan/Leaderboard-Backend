import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from 'src/schema/score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';

@Injectable()
export class ScoreService {
  constructor(
    @InjectModel(Score.name)
    private scoreModel: Model<ScoreDocument>,
  ) { }

  async submit(dto: SubmitScoreDto): Promise<Score> {
    const createdScore = new this.scoreModel(dto);
    return createdScore.save();
  }
}
