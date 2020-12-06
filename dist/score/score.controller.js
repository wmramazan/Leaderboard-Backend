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
exports.ScoreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const score_schema_1 = require("./score.schema");
const submit_score_dto_1 = require("./dto/submit-score.dto");
const score_service_1 = require("./score.service");
let ScoreController = class ScoreController {
    constructor(service) {
        this.service = service;
    }
    submitScore(dto) {
        return this.service.submit(dto);
    }
};
__decorate([
    common_1.Post('submit'),
    swagger_1.ApiCreatedResponse({
        description: 'The score has been submitted',
        type: score_schema_1.Score,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [submit_score_dto_1.SubmitScoreDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "submitScore", null);
ScoreController = __decorate([
    swagger_1.ApiTags('score'),
    common_1.Controller('score'),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], ScoreController);
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map