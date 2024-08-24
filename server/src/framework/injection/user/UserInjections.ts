import { UserLoginController } from "../../../interfaceAdapters/controllers/user/UserLoginController";
import { UserSignupController } from "../../../interfaceAdapters/controllers/user/UserSignupController";
import { UserRepository } from "../../../interfaceAdapters/repositories/user/UserRepository";
import { UserLoginUseCase } from "../../../useCases/user/UserLoginUseCase";
import { UserSignupUseCase } from "../../../useCases/user/UserSignupUseCase";

const mongoRepository = new UserRepository();

// ------------------------------------------| USER SIGN UP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSignupUse = new UserSignupUseCase(mongoRepository);
export const InjectedUserSignUpController = new UserSignupController(userSignupUse);




// ------------------------------------------| USER SIGN UP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userLoginUse = new UserLoginUseCase(mongoRepository);
export const InjectedUserLoginController = new UserLoginController(userLoginUse);