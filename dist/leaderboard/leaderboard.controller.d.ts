import { Leaderboard } from './interface/leaderboard.interface';
import { LeaderboardService } from './leaderboard.service';
export declare class LeaderboardController {
    private readonly service;
    constructor(service: LeaderboardService);
    getLeaderboard(): Promise<Leaderboard>;
    getLeaderboardByCountryIsoCode(isoCode: any): Promise<Leaderboard>;
}
