import { Score } from './score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { ScoreService } from './score.service';
export declare class ScoreController {
    private readonly service;
    constructor(service: ScoreService);
    submitScore(dto: SubmitScoreDto): Promise<Score>;
}
