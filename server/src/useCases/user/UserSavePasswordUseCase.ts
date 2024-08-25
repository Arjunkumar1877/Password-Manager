import { PasswordTypes } from "../../entities/types/user/Password";
import { IUserSavePasswordUseCase } from "../../entities/useCaseInterfaces/user/IUserSavePasswordUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";


export class UserSavePasswordUseCase implements IUserSavePasswordUseCase {
 constructor(private iuserrepository: IUserRepository){};

 async SaveUserPassword(PassData: PasswordTypes): Promise<string> {
     return this.iuserrepository.SavePassword(PassData)
 }
}