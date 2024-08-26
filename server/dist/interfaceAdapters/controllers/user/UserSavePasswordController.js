"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSavePasswordController = void 0;
class UserSavePasswordController {
    constructor(iusersavepasswordusecase) {
        this.iusersavepasswordusecase = iusersavepasswordusecase;
    }
    ;
    async UserSavePasswordControl(req, res) {
        try {
            console.log(req.body);
            const data = await this.iusersavepasswordusecase.SaveUserPassword(req.body);
            console.log(data);
            res.json(data);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.UserSavePasswordController = UserSavePasswordController;
