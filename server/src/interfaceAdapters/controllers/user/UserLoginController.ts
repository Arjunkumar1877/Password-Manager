import { User } from "../../../entities/types/user/User";
import { IUserLoginUseCase } from "../../../entities/useCaseInterfaces/user/IUserLoginUseCase";
import { Request, Response } from "express";

export class UserLoginController {
  constructor(private iuserloginusecase: IUserLoginUseCase) {}

  async LoginControl(req: Request, res: Response): Promise<void> {
    try {
      const data: User | any = await this.iuserloginusecase.UserLogin(
        req.body.email,
        req.body.password
      );
      console.log("login controller 📀📀🤷‍♂️🤷‍♂️🤷‍♂️❤️")

      if (data !== "Invalid credentials" && data !== 'error') {
        const userData = {
          username: data?.username,
          email: data?.email,
        };
        res.json(userData);
      } else {
        let data = false;
        res.json(data); // Send error message in response
      }
    } catch (error) {
      console.log(error);
    }
  }
}
