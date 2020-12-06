import { Model } from 'mongoose';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from '../user/user.schema';

const faker = require('faker');

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  onModuleInit() {
    console.log('User Module | Init');

    //this.insertData()
  }

  async insertData() {
    const count = await this.userModel.countDocuments();

    if (count != 0) return;

    for (let i = 0; i < 100; i++) {
      console.log(`User Insertion: ${i}/100`);

      const dto = new CreateUserDto();
      dto.display_name = faker.name.findName();

      const createdUser = new this.userModel(dto);
      createdUser.country = faker.address.countryCode().toLowerCase();
      createdUser.rank = i + 1;

      await createdUser.save();
    }
  }

  async create(ipAddress: string, dto: CreateUserDto): Promise<User> {
    console.log(`create user: ${dto.display_name}`);

    const createdUser = new this.userModel(dto);
    const numberOfUsers = await this.userModel.countDocuments();

    createdUser.country = faker.address.countryCode().toLowerCase();
    createdUser.rank = numberOfUsers + 1;

    return createdUser.save();
  }

  async get(userId: string): Promise<User> {
    return this.userModel.findOne({ user_id: userId });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
