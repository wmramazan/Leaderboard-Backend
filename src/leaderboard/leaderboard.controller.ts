import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Leaderboard } from './interface/leaderboard.interface';
import { LeaderboardService } from './leaderboard.service';

@ApiTags('leaderboard')
@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly service: LeaderboardService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'The leaderboard has been listed.',
    type: Leaderboard,
  })
  getLeaderboard(): Promise<Leaderboard> {
    return this.service.get();
  }

  @Get(':countryIsoCode')
  @ApiCreatedResponse({
    description: 'The leaderboard has been listed by country.',
    type: Leaderboard,
  })
  getLeaderboardByCountryIsoCode(
    @Param('countryIsoCode') isoCode,
  ): Promise<Leaderboard> {
    return this.service.getByIsoCode(isoCode);
  }
}
