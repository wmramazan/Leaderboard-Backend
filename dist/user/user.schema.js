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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const uuid_1 = require("uuid");
let User = class User {
};
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop({
        default: uuid_1.v4
    }),
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "display_name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop({
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "points", void 0);
__decorate([
    swagger_1.ApiProperty(),
    mongoose_1.Prop({
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "rank", void 0);
User = __decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map