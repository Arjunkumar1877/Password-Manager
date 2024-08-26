"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetPassBookUseCase = void 0;
class UserGetPassBookUseCase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    ;
    async GetUserPassbook(userId, startDate, endDate) {
        return await this.iuserrepository.GetUserPassBook(userId, startDate, endDate);
    }
}
exports.UserGetPassBookUseCase = UserGetPassBookUseCase;
