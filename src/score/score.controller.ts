import { Body, Controller, Post } from '@nestjs/common';
import { Score } from 'src/schema/score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly service: ScoreService) { }

  @Post('submit')
  submitScore(
    @Body() dto: SubmitScoreDto,
  ): Promise<Score> {
    return this.service.submit(dto)
  }

}
