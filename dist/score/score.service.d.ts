import { Model } from 'mongoose';
import { OnModuleInit } from '@nestjs/common';
import { Score, ScoreDocument } from './score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { UserDocument } from '../user/user.schema';
export declare class ScoreService implements OnModuleInit {
    private userModel;
    private scoreModel;
    constructor(userModel: Model<UserDocument>, scoreModel: Model<ScoreDocument>);
    onModuleInit(): void;
    insertData(): Promise<void>;
    submit(dto: SubmitScoreDto): Promise<Score>;
}
