import { User } from "../../entities/types/user/User";
import { IUserResendOtpUseCase } from "../../entities/useCaseInterfaces/user/IUserResendOtpUseCase";
import { otp } from "../../framework/services/generateOtp/GenerateOtp";
import { SendEmailOtp } from "../../framework/services/nodeMailer/NodeMailer";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";

export class UserResendOtpUseCase implements IUserResendOtpUseCase {
  constructor(private iuserrepository: IUserRepository) {}

  async ResendOtp(email: string): Promise<boolean> {
    try {
      const existUser: User | null = await this.iuserrepository.FindUserByEmail(email);
      const OTP:any = otp();

      if (existUser) {
        const updatedOtp: any = this.iuserrepository.UpdateUserOtp(email, OTP);

        if (updatedOtp) {
          const sendEmail: any = await SendEmailOtp(email, OTP);
          if (sendEmail) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
