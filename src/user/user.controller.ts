import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../user/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get('profile/:userId')
  @ApiCreatedResponse({
    description: 'The profile has been retrieved.',
    type: User
  })
  getUserProfile(
    @Param('userId') userId,
  ): Promise<User> {
    return this.service.get(userId)
  }

  @Post('create')
  @ApiCreatedResponse({
    description: 'The user has been created.',
    type: User
  })
  createUser(
    @Request() req,
    @Body() dto: CreateUserDto,
  ): Promise<User> {
    return this.service.create(req.ip, dto)
  }

}
