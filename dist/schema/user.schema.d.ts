import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    user_id: string;
    display_name: string;
    country: string;
    points: number;
    rank: number;
}
export declare const UserSchema: import("mongoose").Schema<any>;
