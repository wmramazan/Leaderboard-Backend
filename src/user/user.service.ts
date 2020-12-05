import { Model } from 'mongoose';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from '../user/user.schema';

const faker = require('faker');
const geoip = require('geoip-lite');

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  onModuleInit() {
    console.log("User | Data Insertion")

    this.insertData()
  }

  async insertData() {
    for (let i = 0; i < 1000; i++) {
      console.log(`${i}/1000`)

      const dto = new CreateUserDto()
      dto.display_name = faker.name.findName()
      const createdUser = new this.userModel(dto);
      createdUser.country = faker.address.countryCode().toLowerCase()
      createdUser.rank = i + 1
      await createdUser.save();
    }
  }

  async create(ipAddress: string, dto: CreateUserDto): Promise<User> {
    console.log(`create user: ${dto.display_name}`)

    const createdUser = new this.userModel(dto);
    const numberOfUsers = await this.userModel.countDocuments()

    const geo = geoip.lookup(ipAddress)
    const countryIsoCode = geo == null ? "tr" : geo.country.toLowerCase()

    createdUser.country = countryIsoCode
    createdUser.rank = numberOfUsers + 1

    return createdUser.save();
  }

  async get(userId: string): Promise<User> {
    return this.userModel.findOne({ user_id: userId })
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
