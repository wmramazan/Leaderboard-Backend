import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from 'src/schema/score.schema';
import { Leaderboard } from './interface/leaderboard.interface';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectModel(Score.name)
    private scoreModel: Model<ScoreDocument>,
  ) { }

  async get(): Promise<Leaderboard> {
    return null
  }

  async getByIsoCode(isoCode: string): Promise<Leaderboard> {
    return null
  }
}
