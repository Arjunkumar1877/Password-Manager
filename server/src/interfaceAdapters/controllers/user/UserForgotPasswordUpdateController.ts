import { IUserForgotPasswordUpdateUseCase } from "../../../entities/useCaseInterfaces/user/IUserForgotPasswordUpdateUseCase";
import { Request, Response } from "express";

export class UserForgotPasswordUpdateController{
    constructor(private iuseraddnewpasswordusecase: IUserForgotPasswordUpdateUseCase){}

    async UserAddNewPasswordControll(req: Request, res: Response): Promise<void>{
        console.log(req.body)
        const data: boolean = await this.iuseraddnewpasswordusecase.UserAddNewPassword(req.body.email, req.body.password);
    
        res.json(data);
    
    }

}