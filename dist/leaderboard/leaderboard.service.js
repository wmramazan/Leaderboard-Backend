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
exports.LeaderboardService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/user.schema");
const constants_1 = require("../util/constants");
let LeaderboardService = class LeaderboardService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async get() {
        return this.getLeaderboard();
    }
    async getByIsoCode(isoCode) {
        return this.getLeaderboard({
            country: isoCode
        });
    }
    async getLeaderboard(conditions) {
        let numberOfUsers = await this.userModel.countDocuments(conditions);
        let users = await this.userModel.find(conditions).sort('rank').limit(constants_1.NUMBER_OF_USERS_IN_LEADERBOARD).exec();
        return {
            numberOfPlayers: numberOfUsers,
            players: users
        };
    }
};
LeaderboardService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LeaderboardService);
exports.LeaderboardService = LeaderboardService;
//# sourceMappingURL=leaderboard.service.js.map