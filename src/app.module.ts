import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { DATABASE_CONNECTION_URL } from './util/constants';

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_CONNECTION_URL),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
