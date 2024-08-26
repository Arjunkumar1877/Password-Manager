"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const PasswordsModel_1 = require("../../../framework/database/models/user/PasswordsModel");
const UserModel_1 = require("../../../framework/database/models/user/UserModel");
class UserRepository {
    async CreateUser(user) {
        return UserModel_1.UserModel.create(user);
    }
    async FindUserByEmail(email) {
        return UserModel_1.UserModel.findOne({ email: email });
    }
    async UpdateUserOtp(email, otp) {
        return UserModel_1.UserModel.findOneAndUpdate({ email: email }, {
            $set: {
                otp: otp
            }
        }, { new: true });
    }
    async SavePassword(PassData) {
        const userData = {
            user: PassData.user,
            name: PassData.name,
            password: PassData.password
        };
        const savedPassword = await PasswordsModel_1.PasswordModel.create(userData);
        if (savedPassword) {
            return 'saved';
        }
        else {
            return 'failed';
        }
    }
    async UserVerifyUpdate(userId) {
        const updatedUser = await UserModel_1.UserModel.findOneAndUpdate({ _id: userId }, {
            $set: {
                verified: true
            }
        }, { new: true });
        if (updatedUser) {
            return true;
        }
        else {
            return false;
        }
    }
    async UserSaveNewPassword(email, password) {
        const updated = await UserModel_1.UserModel.findOneAndUpdate({ email: email }, {
            password: password
        }, { new: true });
        if (updated) {
            return true;
        }
        else {
            return false;
        }
    }
    async GetUserPassBook(userId, startDate, endDate) {
        let passwords;
        if (startDate && endDate) {
            if (startDate !== '' && endDate !== '') {
                passwords = await PasswordsModel_1.PasswordModel.find({
                    user: userId,
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate),
                    },
                })
                    .sort({ createdAt: -1 })
                    .exec();
                return passwords;
            }
            else {
                return [];
            }
        }
        else {
            passwords = await PasswordsModel_1.PasswordModel.find({ user: userId })
                .sort({ createdAt: -1 })
                .exec();
            return passwords;
        }
    }
}
exports.UserRepository = UserRepository;
