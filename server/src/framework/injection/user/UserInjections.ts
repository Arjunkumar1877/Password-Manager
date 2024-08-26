import { UserForgotPasswordUpdateController } from "../../../interfaceAdapters/controllers/user/UserForgotPasswordUpdateController";
import { UserGetPassbookController } from "../../../interfaceAdapters/controllers/user/UserGetPassbookController";
import { UserLoginController } from "../../../interfaceAdapters/controllers/user/UserLoginController";
import { UserResendOtpController } from "../../../interfaceAdapters/controllers/user/UserResendOtpController";
import { UserSavePasswordController } from "../../../interfaceAdapters/controllers/user/UserSavePasswordController";
import { UserSignupController } from "../../../interfaceAdapters/controllers/user/UserSignupController";
import { UserVerifyController } from "../../../interfaceAdapters/controllers/user/UserVerifyController";
import { UserRepository } from "../../../interfaceAdapters/repositories/user/UserRepository";
import { UserForgotPasswordUpdateUseCase } from "../../../useCases/user/UserForgotPasswordUpdateUseCase";
import { UserGetPassBookUseCase } from "../../../useCases/user/UserGetPassBookUseCase";
import { UserLoginUseCase } from "../../../useCases/user/UserLoginUseCase";
import { UserResendOtpUseCase } from "../../../useCases/user/UserResendOtpUseCase";
import { UserSavePasswordUseCase } from "../../../useCases/user/UserSavePasswordUseCase";
import { UserSignupUseCase } from "../../../useCases/user/UserSignupUseCase";
import { UserVerifyUsecase } from "../../../useCases/user/UserVerifyUsecase";

const mongoRepository = new UserRepository();

// ------------------------------------------| USER SIGN UP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSignupUse = new UserSignupUseCase(mongoRepository);
export const InjectedUserSignUpController = new UserSignupController(userSignupUse);


// ------------------------------------------| USER VERIFY INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userVerifyUse = new UserVerifyUsecase(mongoRepository);
export const InjectedUserVerifyController = new UserVerifyController(userVerifyUse);


// ------------------------------------------| USER LOGIN INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userLoginUse = new UserLoginUseCase(mongoRepository);
export const InjectedUserLoginController = new UserLoginController(userLoginUse);


// ------------------------------------------| USER RESEND OTP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userResendOtpUse = new UserResendOtpUseCase(mongoRepository);
export const InjectedUserResendOtpController = new UserResendOtpController(userResendOtpUse);


// ------------------------------------------| USER SAVING PASSWORD INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSavePasswordUse = new UserSavePasswordUseCase(mongoRepository);
export const InjectedUserSavepasswordController = new UserSavePasswordController(userSavePasswordUse);


// ------------------------------------------| USER Add PASSWORD INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userForgotPasswordUpdateUse = new UserForgotPasswordUpdateUseCase(mongoRepository);
export const InjectedUserForgotPasswordUpdateController = new UserForgotPasswordUpdateController(userForgotPasswordUpdateUse);


// ------------------------------------------| USER GET PASSBOOK INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userGetPassbookUse = new UserGetPassBookUseCase(mongoRepository);
export const InjectedUserGetPassbookController = new UserGetPassbookController(userGetPassbookUse);