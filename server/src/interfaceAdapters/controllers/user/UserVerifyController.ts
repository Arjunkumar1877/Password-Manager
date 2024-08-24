import { IUserVerifyUsecase } from "../../../entities/useCaseInterfaces/user/IUserVerifyUsecase";
import { Request, Response } from "express";


export class UserVerifyController{
  constructor(private iuserverifyusecase: IUserVerifyUsecase){};

  async UserVerifyControl(req: Request, res: Response): Promise<void>{
    try {
        const data: boolean = await  this.iuserverifyusecase.VerifyUser(req.body.email, req.body.otp);

        res.json(data)
    } catch (error) {
        console.log(error)
    }
  }
}