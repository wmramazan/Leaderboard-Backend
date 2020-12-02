import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get('profile/:userId')
  getUserProfile(
    @Param('userId') userId,
  ): Promise<User> {
    return this.service.get(userId)
  }

  @Post('create')
  createUser(
    @Body() dto: CreateUserDto,
  ): Promise<User> {
    return this.service.create(dto)
  }

}
