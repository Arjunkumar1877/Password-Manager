"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSavePasswordUseCase = void 0;
class UserSavePasswordUseCase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    ;
    async SaveUserPassword(PassData) {
        return this.iuserrepository.SavePassword(PassData);
    }
}
exports.UserSavePasswordUseCase = UserSavePasswordUseCase;
