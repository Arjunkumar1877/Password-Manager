"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerifyController = void 0;
class UserVerifyController {
    constructor(iuserverifyusecase) {
        this.iuserverifyusecase = iuserverifyusecase;
    }
    ;
    async UserVerifyControl(req, res) {
        try {
            const data = await this.iuserverifyusecase.VerifyUser(req.body.email, req.body.otp);
            res.json(data);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.UserVerifyController = UserVerifyController;
