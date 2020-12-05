import { User } from '../user/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    getUserProfile(userId: any): Promise<User>;
    createUser(req: any, dto: CreateUserDto): Promise<User>;
}
