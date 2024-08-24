import { User } from "../../types/user/User";

export interface IUserLoginUseCase{
   UserLogin(email: string, password: string): Promise<string | User >;
}