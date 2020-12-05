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
exports.UserService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_schema_1 = require("../user/user.schema");
const faker = require('faker');
const geoip = require('geoip-lite');
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    onModuleInit() {
        console.log("User Module | Init");
        this.insertData();
    }
    async insertData() {
        const count = await this.userModel.countDocuments();
        if (count != 0)
            return;
        for (let i = 0; i < 100; i++) {
            console.log(`User Insertion: ${i}/100`);
            const dto = new create_user_dto_1.CreateUserDto();
            dto.display_name = faker.name.findName();
            const createdUser = new this.userModel(dto);
            createdUser.country = faker.address.countryCode().toLowerCase();
            createdUser.rank = i + 1;
            await createdUser.save();
        }
    }
    async create(ipAddress, dto) {
        console.log(`create user: ${dto.display_name}`);
        const createdUser = new this.userModel(dto);
        const numberOfUsers = await this.userModel.countDocuments();
        const geo = geoip.lookup(ipAddress);
        const countryIsoCode = geo == null ? "tr" : geo.country.toLowerCase();
        createdUser.country = countryIsoCode;
        createdUser.rank = numberOfUsers + 1;
        return createdUser.save();
    }
    async get(userId) {
        return this.userModel.findOne({ user_id: userId });
    }
    async findAll() {
        return this.userModel.find().exec();
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map