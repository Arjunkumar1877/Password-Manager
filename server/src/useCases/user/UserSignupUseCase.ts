import { User } from "../../entities/types/user/User";
import { IUserSignupUseCase } from "../../entities/useCaseInterfaces/user/IUserSignupUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcrypt'
import { SendEmailOtp } from "../../framework/nodeMailer/NodeMailer";

export class UserSignupUseCase  implements IUserSignupUseCase{
    constructor(private iuserRepository: IUserRepository){}

    async SignupUser(user: User): Promise<User | null> {

        const OTP = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
          });

          console.log(OTP)
          const passwordHashed = await bcrypt.hash(user.password, 10);
          console.log(passwordHashed);
         const updatedUser = {
            username: user.username,
            email: user.email,
            password: passwordHashed,
            otp: OTP
         } 

         const SendEmail = await SendEmailOtp(updatedUser.email, OTP);

       if(SendEmail){
        return this.iuserRepository.CreateUser(updatedUser);
       }else{
        return null;
       }
    }
}