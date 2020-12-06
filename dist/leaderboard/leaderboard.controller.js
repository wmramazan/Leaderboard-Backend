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
exports.LeaderboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const leaderboard_interface_1 = require("./interface/leaderboard.interface");
const leaderboard_service_1 = require("./leaderboard.service");
let LeaderboardController = class LeaderboardController {
    constructor(service) {
        this.service = service;
    }
    getLeaderboard() {
        return this.service.get();
    }
    getLeaderboardByCountryIsoCode(isoCode) {
        return this.service.getByIsoCode(isoCode);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiCreatedResponse({
        description: 'The leaderboard has been listed.',
        type: leaderboard_interface_1.Leaderboard,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeaderboardController.prototype, "getLeaderboard", null);
__decorate([
    common_1.Get(':countryIsoCode'),
    swagger_1.ApiCreatedResponse({
        description: 'The leaderboard has been listed by country.',
        type: leaderboard_interface_1.Leaderboard,
    }),
    __param(0, common_1.Param('countryIsoCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeaderboardController.prototype, "getLeaderboardByCountryIsoCode", null);
LeaderboardController = __decorate([
    swagger_1.ApiTags('leaderboard'),
    common_1.Controller('leaderboard'),
    __metadata("design:paramtypes", [leaderboard_service_1.LeaderboardService])
], LeaderboardController);
exports.LeaderboardController = LeaderboardController;
//# sourceMappingURL=leaderboard.controller.js.map