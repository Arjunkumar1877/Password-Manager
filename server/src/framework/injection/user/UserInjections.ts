import { UserLoginController } from "../../../interfaceAdapters/controllers/user/UserLoginController";
import { UserSignupController } from "../../../interfaceAdapters/controllers/user/UserSignupController";
import { UserVerifyController } from "../../../interfaceAdapters/controllers/user/UserVerifyController";
import { UserRepository } from "../../../interfaceAdapters/repositories/user/UserRepository";
import { UserLoginUseCase } from "../../../useCases/user/UserLoginUseCase";
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


// // ------------------------------------------| USER LOGIN INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
// const userLoginUse = new UserLoginUseCase(mongoRepository);
// export const InjectedUserLoginController = new UserLoginController(userLoginUse);