import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';

describe('LeaderboardController', () => {
    let leaderboardController: LeaderboardController;
    let leaderboardService: LeaderboardService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LeaderboardController],
            providers: [
                {
                    provide: LeaderboardService,
                    useValue: {
                        get: jest.fn().mockResolvedValue(
                            {
                                numberOfPlayers: 5000,
                                players: [
                                    {
                                        "rank": 1,
                                        "points": 0,
                                        "display_name": "Ramazan Vapurcu",
                                        "leaderboard_id": "32c07b13-ddb0-4910-a063-7940c5b8c3ba",
                                        "country": "tr",
                                    }
                                ]
                            }
                        ),
                        getByIsoCode: jest.fn().mockResolvedValue(
                            {
                                numberOfPlayers: 5000,
                                players: [
                                    {
                                        "rank": 1,
                                        "points": 0,
                                        "display_name": "Ramazan Vapurcu",
                                        "leaderboard_id": "32c07b13-ddb0-4910-a063-7940c5b8c3ba",
                                        "country": "tr",
                                    }
                                ]
                            }
                        )
                    }
                }
            ],
        }).compile();

        leaderboardController = module.get<LeaderboardController>(LeaderboardController);
        leaderboardService = module.get<LeaderboardService>(LeaderboardService);
    });

    describe('list', () => {
        it('should return a list of users with number of all users', async () => {
            const result = {
                numberOfPlayers: 5000,
                players: [
                    {
                        "rank": 1,
                        "points": 0,
                        "display_name": "Ramazan Vapurcu",
                        "leaderboard_id": "32c07b13-ddb0-4910-a063-7940c5b8c3ba",
                        "country": "tr",
                    }
                ]
            }

            expect(leaderboardController.getLeaderboard()).resolves.toEqual(result)
        });

        it('should return a list of users with number of all users by the country', async () => {
            const isoCode = "tr"
            const result = {
                numberOfPlayers: 5000,
                players: [
                    {
                        "rank": 1,
                        "points": 0,
                        "display_name": "Ramazan Vapurcu",
                        "leaderboard_id": "32c07b13-ddb0-4910-a063-7940c5b8c3ba",
                        "country": "tr",
                    }
                ]
            }

            expect(leaderboardController.getLeaderboardByCountryIsoCode(isoCode)).resolves.toEqual(result)
        });
    });
});
