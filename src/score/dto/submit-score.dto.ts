import { ApiProperty } from '@nestjs/swagger';

export class SubmitScoreDto {
  @ApiProperty({
    description: 'The value of new score',
    type: Number,
  })
  score_worth: number;

  @ApiProperty({
    description: 'The identifier of user',
  })
  user_id: string;
}
