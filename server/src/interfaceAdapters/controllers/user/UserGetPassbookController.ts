import { IUserGetPassbookUseCase } from "../../../entities/useCaseInterfaces/IUserGetPassbookUseCase";
import { Request, Response } from "express";

export class UserGetPassbookController{
    constructor(private igetuserpassbookusecase: IUserGetPassbookUseCase){};

    async GetUserPassbookControl(req: Request, res: Response): Promise<void>{
      try {
        console.log(req.body)
        const data = await this.igetuserpassbookusecase.GetUserPassbook(req.body.userId, req.body.startDate, req.body.endDate)
        console.log(data)
        res.json(data)
      } catch (error) {
        console.log(error)
      }
    }
}