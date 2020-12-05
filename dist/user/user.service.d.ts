import { Model } from 'mongoose';
import { OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from '../user/user.schema';
export declare class UserService implements OnModuleInit {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    onModuleInit(): void;
    insertData(): Promise<void>;
    create(ipAddress: string, dto: CreateUserDto): Promise<User>;
    get(userId: string): Promise<User>;
    findAll(): Promise<User[]>;
}
