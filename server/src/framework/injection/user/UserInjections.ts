import { UserSignupController } from "../../../interfaceAdapters/controllers/user/UserSignupController";
import { UserRepository } from "../../../interfaceAdapters/repositories/user/UserRepository";
import { UserSignupUseCase } from "../../../useCases/user/UserSignupUseCase";

const mongoRepository = new UserRepository();

// ------------------------------------------| USER SIGN UP INJECTION |---------------------------------------------------------------------------------------------------------------------------------------------------- 
const userSignupUse = new UserSignupUseCase(mongoRepository);
export const InjectedUserSignUpController = new UserSignupController(userSignupUse);