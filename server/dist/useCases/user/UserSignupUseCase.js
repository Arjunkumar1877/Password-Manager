"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignupUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const NodeMailer_1 = require("../../framework/services/nodeMailer/NodeMailer");
const GenerateOtp_1 = require("../../framework/services/generateOtp/GenerateOtp");
class UserSignupUseCase {
    constructor(iuserRepository) {
        this.iuserRepository = iuserRepository;
    }
    async SignupUser(user) {
        const existUser = await this.iuserRepository.FindUserByEmail(user.email);
        const OTP = await (0, GenerateOtp_1.otp)();
        console.log(OTP);
        const passwordHashed = await bcrypt_1.default.hash(user.password, 10);
        console.log(passwordHashed);
        const updatedUser = {
            username: user.username,
            email: user.email,
            password: passwordHashed,
            otp: OTP
        };
        if (existUser) {
            return null;
        }
        else {
            await (0, NodeMailer_1.SendEmailOtp)(updatedUser.email, OTP);
            return this.iuserRepository.CreateUser(updatedUser);
        }
    }
}
exports.UserSignupUseCase = UserSignupUseCase;
