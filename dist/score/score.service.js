"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const score_schema_1 = require("./score.schema");
const submit_score_dto_1 = require("./dto/submit-score.dto");
const user_schema_1 = require("../user/user.schema");
let ScoreService = class ScoreService {
    constructor(userModel, scoreModel) {
        this.userModel = userModel;
        this.scoreModel = scoreModel;
    }
    onModuleInit() {
        console.log("Score Module | Init");
    }
    async insertData() {
        const userCount = await this.userModel.countDocuments();
        const scoreCount = await this.scoreModel.countDocuments();
        if (userCount == 0 || scoreCount != 0)
            return;
        for (let i = 0; i < 100000; i++) {
            console.log(`Score Insertion: ${i}/100000`);
            const randomUser = await this.userModel.findOne().skip(Math.floor(Math.random() * userCount));
            const dto = new submit_score_dto_1.SubmitScoreDto();
            dto.score_worth = Math.random() * 50;
            dto.user_id = randomUser.user_id;
            await this.submit(dto);
        }
    }
    async submit(dto) {
        console.log(`Submit score: ${dto.score_worth}`);
        const createdScore = new this.scoreModel(dto);
        const user = await this.userModel.findOne({
            user_id: dto.user_id
        });
        console.log(`user: ${user}`);
        const newPoints = user.points + createdScore.score_worth;
        console.log(`newPoints: ${newPoints}`);
        const firstAffectedUser = await this.userModel.findOne({
            points: { $lt: newPoints }
        }).sort('rank');
        console.log(`firstAffectedUser: ${firstAffectedUser}`);
        if (firstAffectedUser != null && firstAffectedUser.id != user.id) {
            const affectedUsers = await this.userModel.find({
                rank: { $lt: user.rank, $gte: firstAffectedUser.rank }
            });
            console.log(`Number of affected users: ${affectedUsers.length}`);
            affectedUsers.forEach(async (affectedUser) => {
                affectedUser.rank += 1;
                await affectedUser.save();
            });
            user.rank = firstAffectedUser.rank;
        }
        user.points = newPoints;
        await user.save();
        return createdScore.save();
    }
};
ScoreService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __param(1, mongoose_2.InjectModel(score_schema_1.Score.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map