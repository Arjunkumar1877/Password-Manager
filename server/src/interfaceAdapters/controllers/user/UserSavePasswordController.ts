import { IUserSavePasswordUseCase } from "../../../entities/useCaseInterfaces/user/IUserSavePasswordUseCase";
import { Response, Request } from "express";


export class UserSavePasswordController{
constructor(private iusersavepasswordusecase: IUserSavePasswordUseCase){};

async UserSavePasswordControl(req: Request, res: Response): Promise<void>{
 try {

    console.log(req.body)

    const data = await this.iusersavepasswordusecase.SaveUserPassword(req.body);

    console.log(data)
    res.json(data)
    
 } catch (error) {
    console.log(error)
 }
}
}