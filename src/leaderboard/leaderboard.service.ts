import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/user.schema';
import { NUMBER_OF_USERS_IN_LEADERBOARD } from '../util/constants';
import { Leaderboard } from './interface/leaderboard.interface';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  async get(): Promise<Leaderboard> {
    return this.getLeaderboard()
  }

  async getByIsoCode(isoCode: string): Promise<Leaderboard> {
    return this.getLeaderboard({
      country: isoCode
    })
  }

  private async getLeaderboard(conditions?: FilterQuery<User>) {
    let numberOfUsers = await this.userModel.countDocuments(conditions)
    let users = await this.userModel.find(conditions).sort('rank').limit(NUMBER_OF_USERS_IN_LEADERBOARD).exec()
    return {
      numberOfPlayers: numberOfUsers,
      players: users
    };
  }
}
