import { Test, TestingModule } from '@nestjs/testing';
import { Score } from './score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

describe('ScoreController', () => {
  let scoreController: ScoreController;
  let scoreService: ScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreController],
      providers: [
        {
          provide: ScoreService,
          useValue: {
            submit: jest.fn().mockResolvedValue({
              user_id: '361068f9-9db4-456e-89b2-1a01f29f4f77',
              score_worth: 150.4,
              timestamp: 1607172699344,
            }),
          },
        },
      ],
    }).compile();

    scoreController = module.get<ScoreController>(ScoreController);
    scoreService = module.get<ScoreService>(ScoreService);
  });

  describe('submit', () => {
    it('should submit the new score for the user', async () => {
      let score: Score = {
        user_id: '361068f9-9db4-456e-89b2-1a01f29f4f77',
        score_worth: 150.4,
        timestamp: 1607172699344,
      };

      const dto = new SubmitScoreDto();
      dto.score_worth = 150.4;
      dto.user_id = '361068f9-9db4-456e-89b2-1a01f29f4f77';

      expect(scoreController.submitScore(dto)).resolves.toEqual(score);
    });
  });
});
