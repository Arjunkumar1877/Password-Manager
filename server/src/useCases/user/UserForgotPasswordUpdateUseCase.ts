import { IUserForgotPasswordUpdateUseCase } from '../../entities/useCaseInterfaces/user/IUserForgotPasswordUpdateUseCase';
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";
import bcrypt from 'bcrypt';

export class UserForgotPasswordUpdateUseCase implements IUserForgotPasswordUpdateUseCase {
   constructor(private iuserrepository: IUserRepository){};

   async UserAddNewPassword(email: string, password: string): Promise<boolean> {

    const hashedPassword = await bcrypt.hash(password, 10);
       const updated = await this.iuserrepository.UserSaveNewPassword(email, hashedPassword);

       if(updated){
        return true;
       }else{
        return false;
       }
       
   }
}