import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Score } from './score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { ScoreService } from './score.service';

@ApiTags('score')
@Controller('score')
export class ScoreController {
  constructor(private readonly service: ScoreService) { }

  @Post('submit')
  @ApiCreatedResponse({
    description: 'The score has been submitted',
    type: Score
  })
  submitScore(
    @Body() dto: SubmitScoreDto,
  ): Promise<Score> {
    return this.service.submit(dto)
  }

}
