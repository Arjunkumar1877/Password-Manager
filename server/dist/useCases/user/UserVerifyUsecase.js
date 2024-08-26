"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerifyUsecase = void 0;
class UserVerifyUsecase {
    constructor(iuserrepository) {
        this.iuserrepository = iuserrepository;
    }
    ;
    async VerifyUser(email, otp) {
        try {
            const data = await this.iuserrepository.FindUserByEmail(email);
            if (data?._id && data) {
                if (data.otp === otp) {
                    const update = this.iuserrepository.UserVerifyUpdate(data?._id);
                    if (update) {
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
exports.UserVerifyUsecase = UserVerifyUsecase;
