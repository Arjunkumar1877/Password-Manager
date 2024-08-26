"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForgotPasswordUpdateUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserForgotPasswordUpdateUseCase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    ;
    async UserAddNewPassword(email, password) {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const updated = await this.iuserrepository.UserSaveNewPassword(email, hashedPassword);
        if (updated) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.UserForgotPasswordUpdateUseCase = UserForgotPasswordUpdateUseCase;
