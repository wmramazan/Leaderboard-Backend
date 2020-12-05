import { Document } from 'mongoose';
export declare type ScoreDocument = Score & Document;
export declare class Score {
    user_id: string;
    score_worth: number;
    timestamp: number;
}
export declare const ScoreSchema: import("mongoose").Schema<any>;
