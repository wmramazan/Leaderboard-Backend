import { Controller, Get, Param } from '@nestjs/common';
import { Leaderboard } from './interface/leaderboard.interface';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly service: LeaderboardService) { }

  @Get('profile/:userId')
  getLeaderboard(): Promise<Leaderboard> {
    return this.service.get()
  }

  @Get(':countryIsoCode')
  getLeaderboardByCountryIsoCode(
    @Param('countryIsoCode') isoCode,
  ): Promise<Leaderboard> {
    return this.service.getByIsoCode(isoCode)
  }

}
