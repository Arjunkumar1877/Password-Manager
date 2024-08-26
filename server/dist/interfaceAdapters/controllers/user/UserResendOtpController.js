"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResendOtpController = void 0;
class UserResendOtpController {
    constructor(iuserresendotpusecase) {
        this.iuserresendotpusecase = iuserresendotpusecase;
    }
    ;
    async ResendOtpControl(req, res) {
        try {
            const data = await this.iuserresendotpusecase.ResendOtp(req.body.email);
            console.log("resent otp controller 💕💕💕💕💕💕");
            res.json(data);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.UserResendOtpController = UserResendOtpController;
