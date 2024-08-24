import { IUserSignupUseCase } from "../../../entities/useCaseInterfaces/user/IUserSignupUseCase";
import { Request, Response } from "express";

export class UserSignupController {
  constructor(private iusersignupUseCase: IUserSignupUseCase) {}

  async SignupUserControl(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.iusersignupUseCase.SignupUser(req.body);
   if(data){
    const userData = {
      _id: data._id,
       username: data.username,
       email: data.email
    }
    res.status(200).json(userData);
   }else{
    res.json(data);
   }
     
    } catch (error) {
      console.error("Error during user signup:", error); 
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
