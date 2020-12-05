import { Model } from 'mongoose';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from 'src/schema/score.schema';
import { SubmitScoreDto } from './dto/submit-score.dto';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class ScoreService implements OnModuleInit {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    @InjectModel(Score.name)
    private scoreModel: Model<ScoreDocument>,
  ) { }

  onModuleInit() {
    console.log("Score | Data Insertion")

    //this.insertData()
  }

  async insertData() {
    const count = await this.userModel.countDocuments()
    for (let i = 0; i < 100; i++) {
      console.log(`i: ${i}`)
      const randomUser = await this.userModel.findOne().skip(
        Math.floor(Math.random() * count)
      )
      /*const randomUser = await this.userModel.findOne({
        rank: 10
      })*/
      const dto = new SubmitScoreDto()
      dto.score_worth = Math.random() * 50
      dto.user_id = randomUser.user_id

      await this.submit(dto)
    }
  }

  async submit(dto: SubmitScoreDto): Promise<Score> {
    console.log(`Submit score: ${dto.score_worth}`)
    const createdScore = new this.scoreModel(dto);

    const user = await this.userModel.findOne({
      user_id: dto.user_id
    })

    console.log(`user: ${user}`)

    const newPoints = user.points + createdScore.score_worth

    console.log(`newPoints: ${newPoints}`)

    const firstAffectedUser = await this.userModel.findOne({
      points: { $lt: newPoints }
    }).sort('rank')

    console.log(`firstAffectedUser: ${firstAffectedUser}`)

    if (firstAffectedUser != null && firstAffectedUser.id != user.id) {
      const affectedUsers = await this.userModel.find({
        rank: { $lt: user.rank, $gte: firstAffectedUser.rank }
      })

      console.log(`Number of affected users: ${affectedUsers.length}`)

      affectedUsers.forEach(async affectedUser => {
        affectedUser.rank += 1
        await affectedUser.save()
      })

      user.rank = firstAffectedUser.rank
    }

    user.points = newPoints

    await user.save();
    return createdScore.save();
  }
}
