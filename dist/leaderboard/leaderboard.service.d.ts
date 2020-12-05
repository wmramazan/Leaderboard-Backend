import { Model } from 'mongoose';
import { UserDocument } from '../user/user.schema';
import { Leaderboard } from './interface/leaderboard.interface';
export declare class LeaderboardService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    get(): Promise<Leaderboard>;
    getByIsoCode(isoCode: string): Promise<Leaderboard>;
    private getLeaderboard;
}
