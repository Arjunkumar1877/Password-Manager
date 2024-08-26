"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectedUserGetPassbookController = exports.InjectedUserForgotPasswordUpdateController = exports.InjectedUserSavepasswordController = exports.InjectedUserResendOtpController = exports.InjectedUserLoginController = exports.InjectedUserVerifyController = exports.InjectedUserSignUpController = void 0;
const UserForgotPasswordUpdateController_1 = require("../../../interfaceAdapters/controllers/user/UserForgotPasswordUpdateController");
const UserGetPassbookController_1 = require("../../../interfaceAdapters/controllers/user/UserGetPassbookController");
const UserLoginController_1 = require("../../../interfaceAdapters/controllers/user/UserLoginController");
const UserResendOtpController_1 = require("../../../interfaceAdapters/controllers/user/UserResendOtpController");
const UserSavePasswordController_1 = require("../../../interfaceAdapters/controllers/user/UserSavePasswordController");
const UserSignupController_1 = require("../../../interfaceAdapters/controllers/user/UserSignupController");
const UserVerifyController_1 = require("../../../interfaceAdapters/controllers/user/UserVerifyController");
const UserRepository_1 = require("../../../interfaceAdapters/repositories/user/UserRepository");
const UserForgotPasswordUpdateUseCase_1 = require("../../../useCases/user/UserForgotPasswordUpdateUseCase");
const UserGetPassBookUseCase_1 = require("../../../useCases/user/UserGetPassBookUseCase");
const UserLoginUseCase_1 = require("../../../useCases/user/UserLoginUseCase");
const UserResendOtpUseCase_1 = require("../../../useCases/user/UserResendOtpUseCase");
const UserSavePasswordUseCase_1 = require("../../../useCases/user/UserSavePasswordUseCase");
const UserSignupUseCase_1 = require("../../../useCases/user/UserSignupUseCase");
const UserVerifyUsecase_1 = require("../../../useCases/user/UserVerifyUsecase");
const mongoRepository = new UserRepository_1.UserRepository();
// ------------------------------------------| USER SIGN UP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSignupUse = new UserSignupUseCase_1.UserSignupUseCase(mongoRepository);
exports.InjectedUserSignUpController = new UserSignupController_1.UserSignupController(userSignupUse);
// ------------------------------------------| USER VERIFY INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userVerifyUse = new UserVerifyUsecase_1.UserVerifyUsecase(mongoRepository);
exports.InjectedUserVerifyController = new UserVerifyController_1.UserVerifyController(userVerifyUse);
// ------------------------------------------| USER LOGIN INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userLoginUse = new UserLoginUseCase_1.UserLoginUseCase(mongoRepository);
exports.InjectedUserLoginController = new UserLoginController_1.UserLoginController(userLoginUse);
// ------------------------------------------| USER RESEND OTP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userResendOtpUse = new UserResendOtpUseCase_1.UserResendOtpUseCase(mongoRepository);
exports.InjectedUserResendOtpController = new UserResendOtpController_1.UserResendOtpController(userResendOtpUse);
// ------------------------------------------| USER SAVING PASSWORD INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSavePasswordUse = new UserSavePasswordUseCase_1.UserSavePasswordUseCase(mongoRepository);
exports.InjectedUserSavepasswordController = new UserSavePasswordController_1.UserSavePasswordController(userSavePasswordUse);
// ------------------------------------------| USER Add PASSWORD INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userForgotPasswordUpdateUse = new UserForgotPasswordUpdateUseCase_1.UserForgotPasswordUpdateUseCase(mongoRepository);
exports.InjectedUserForgotPasswordUpdateController = new UserForgotPasswordUpdateController_1.UserForgotPasswordUpdateController(userForgotPasswordUpdateUse);
// ------------------------------------------| USER GET PASSBOOK INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userGetPassbookUse = new UserGetPassBookUseCase_1.UserGetPassBookUseCase(mongoRepository);
exports.InjectedUserGetPassbookController = new UserGetPassbookController_1.UserGetPassbookController(userGetPassbookUse);
