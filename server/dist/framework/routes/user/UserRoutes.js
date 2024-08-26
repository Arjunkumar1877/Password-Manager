"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserInjections_1 = require("../../injection/user/UserInjections");
const PasswordsModel_1 = require("../../database/models/user/PasswordsModel");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/signup', UserInjections_1.InjectedUserSignUpController.SignupUserControl.bind(UserInjections_1.InjectedUserSignUpController));
userRoutes.post('/login', UserInjections_1.InjectedUserLoginController.LoginControl.bind(UserInjections_1.InjectedUserLoginController));
userRoutes.post('/verify', UserInjections_1.InjectedUserVerifyController.UserVerifyControl.bind(UserInjections_1.InjectedUserVerifyController));
userRoutes.post('/resend_otp', UserInjections_1.InjectedUserResendOtpController.ResendOtpControl.bind(UserInjections_1.InjectedUserResendOtpController));
userRoutes.post('/save_password', UserInjections_1.InjectedUserSavepasswordController.UserSavePasswordControl.bind(UserInjections_1.InjectedUserSavepasswordController));
userRoutes.post('/update_forgot_password', UserInjections_1.InjectedUserForgotPasswordUpdateController.UserAddNewPasswordControll.bind(UserInjections_1.InjectedUserForgotPasswordUpdateController));
userRoutes.post('/get_passwords', UserInjections_1.InjectedUserGetPassbookController.GetUserPassbookControl.bind(UserInjections_1.InjectedUserGetPassbookController));
userRoutes.post("/delete_password", async (req, res) => {
    const deleted = await PasswordsModel_1.PasswordModel.findOneAndDelete({ _id: req.body.id });
    if (deleted) {
        const passwords = await PasswordsModel_1.PasswordModel.find({ user: req.body.userId });
        res.json({ deleted: true, passwords: passwords });
    }
    else {
        res.json({ deleted: false, Passwords: "" });
    }
});
