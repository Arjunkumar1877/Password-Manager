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

      if (data !== "Invalid credentials" && data !== "User do not exist") {
        const userData = {
          username: data?.username,
          email: data?.email,
        };
        res.json(userData);
      } else {
        res.status(400).json({ error: data }); // Send error message in response
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred while processing the request." });
    }
  }
}
