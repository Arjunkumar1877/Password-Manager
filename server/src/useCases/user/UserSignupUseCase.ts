import { User } from "../../entities/types/user/User";
import { IUserSignupUseCase } from "../../entities/useCaseInterfaces/user/IUserSignupUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";

import bcrypt from 'bcrypt'
import { SendEmailOtp } from "../../framework/services/nodeMailer/NodeMailer";
import { otp } from "../../framework/services/generateOtp/GenerateOtp";

export class UserSignupUseCase  implements IUserSignupUseCase{
    constructor(private iuserRepository: IUserRepository){}

    async SignupUser(user: User): Promise<User | any> {



          const existUser = await this.iuserRepository.FindUserByEmail(user.email);
          const OTP :string = await otp();

          console.log(OTP)
          const passwordHashed = await bcrypt.hash(user.password, 10);
          console.log(passwordHashed);
         const updatedUser = {
            username: user.username,
            email: user.email,
            password: passwordHashed,
            otp: OTP
         } 

        
         if(existUser){
            return null
          }else{
        await SendEmailOtp(updatedUser.email, OTP);
        return this.iuserRepository.CreateUser(updatedUser);
       }
    }
}