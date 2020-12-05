import { Document } from 'mongoose';
export interface User extends Document {
    readonly user_id: string;
    readonly display_name: string;
    readonly points: number;
    readonly rank: number;
}
