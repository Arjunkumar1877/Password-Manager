import { IUserGetPassbookUseCase } from "../../entities/useCaseInterfaces/IUserGetPassbookUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";


export class UserGetPassBookUseCase implements IUserGetPassbookUseCase{
 constructor(private iuserrepository: IUserRepository){};

  async GetUserPassbook(userId: string, startDate: string, endDate: string): Promise<any> {
     return await this.iuserrepository.GetUserPassBook(userId, startDate, endDate);
 }

}