import { User } from "../../entities/types/user/User";
import { IUserLoginUseCase } from "../../entities/useCaseInterfaces/user/IUserLoginUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";
import bcrypt from 'bcrypt';

export class UserLoginUseCase implements IUserLoginUseCase{
  constructor(private iuserrepository: IUserRepository){};

  async UserLogin(email: string, password: string): Promise<string | User > {
      try {
        const userData = await this.iuserrepository.FindUserByEmail(email);
        
        if(userData){
            if(userData.email === email){
                const checkPassword = bcrypt.compareSync(password, userData?.password);
                if(checkPassword){
                    return userData
                }else{
                    return "Invalid credentials";
                }
            }else{
                return "Invalid credentials";
            }
        }else{
            return "User do not exist"
        }
      

      } catch (error: any) {
        console.log(error.message);
        return 'error'
      }
  }
}