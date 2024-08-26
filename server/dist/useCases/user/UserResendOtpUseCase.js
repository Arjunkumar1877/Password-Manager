"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResendOtpUseCase = void 0;
const GenerateOtp_1 = require("../../framework/services/generateOtp/GenerateOtp");
const NodeMailer_1 = require("../../framework/services/nodeMailer/NodeMailer");
class UserResendOtpUseCase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    async ResendOtp(email) {
        try {
            const existUser = await this.iuserrepository.FindUserByEmail(email);
            const OTP = (0, GenerateOtp_1.otp)();
            if (existUser) {
                const updatedOtp = this.iuserrepository.UpdateUserOtp(email, OTP);
                if (updatedOtp) {
                    const sendEmail = await (0, NodeMailer_1.SendEmailOtp)(email, OTP);
                    if (sendEmail) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    }
}
exports.UserResendOtpUseCase = UserResendOtpUseCase;
