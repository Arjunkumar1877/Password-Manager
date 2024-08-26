import { IUserResendOtpUseCase } from "../../../entities/useCaseInterfaces/user/IUserResendOtpUseCase";
import { Request, Response } from "express";



export class UserResendOtpController{
 constructor(private iuserresendotpusecase: IUserResendOtpUseCase){};

 async ResendOtpControl(req: Request, res: Response): Promise<void>{
    try {
        const data: boolean = await this.iuserresendotpusecase.ResendOtp(req.body.email);
        console.log("resent otp controller 💕💕💕💕💕💕")
       res.json(data);
    } catch (error) {
        console.log(error)
    }
 }
}