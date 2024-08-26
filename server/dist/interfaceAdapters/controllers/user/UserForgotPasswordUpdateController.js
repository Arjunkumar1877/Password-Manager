"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForgotPasswordUpdateController = void 0;
class UserForgotPasswordUpdateController {
    constructor(iuseraddnewpasswordusecase) {
        this.iuseraddnewpasswordusecase = iuseraddnewpasswordusecase;
    }
    async UserAddNewPasswordControll(req, res) {
        console.log(req.body);
        console.log("forget password controller 💕💕💕💕💕💕");
        const data = await this.iuseraddnewpasswordusecase.UserAddNewPassword(req.body.email, req.body.password);
        res.json(data);
    }
}
exports.UserForgotPasswordUpdateController = UserForgotPasswordUpdateController;
