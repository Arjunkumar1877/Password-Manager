"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserLoginUseCase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    ;
    async UserLogin(email, password) {
        try {
            const userData = await this.iuserrepository.FindUserByEmail(email);
            if (userData) {
                if (userData.email === email) {
                    const checkPassword = bcrypt_1.default.compareSync(password, userData?.password);
                    if (checkPassword) {
                        return userData;
                    }
                    else {
                        return "Invalid credentials";
                    }
                }
                else {
                    return "Invalid credentials";
                }
            }
            else {
                return "Invalid credentials";
            }
        }
        catch (error) {
            console.log(error.message);
            return 'error';
        }
    }
}
exports.UserLoginUseCase = UserLoginUseCase;
