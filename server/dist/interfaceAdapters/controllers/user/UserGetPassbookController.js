"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetPassbookController = void 0;
class UserGetPassbookController {
    constructor(igetuserpassbookusecase) {
        this.igetuserpassbookusecase = igetuserpassbookusecase;
    }
    ;
    async GetUserPassbookControl(req, res) {
        try {
            console.log(req.body);
            const data = await this.igetuserpassbookusecase.GetUserPassbook(req.body.userId, req.body.startDate, req.body.endDate);
            console.log(data);
            res.json(data);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.UserGetPassbookController = UserGetPassbookController;
