import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { Score, ScoreSchema } from 'src/schema/score.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Score.name,
        schema: ScoreSchema,
      },
    ]),
  ],
  controllers: [LeaderboardController],
  providers: [LeaderboardService],
})
export class LeaderboardModule { }
