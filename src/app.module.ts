import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ScoreModule } from './score/score.module';
import { UserModule } from './user/user.module';
import { DATABASE_CONNECTION_URL } from './util/constants';

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_CONNECTION_URL),
    UserModule,
    ScoreModule,
    LeaderboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
