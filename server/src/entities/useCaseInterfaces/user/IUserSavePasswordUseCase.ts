import { PasswordTypes } from "../../types/user/Password";

export interface IUserSavePasswordUseCase{
  SaveUserPassword(PassData: PasswordTypes): Promise<string>; 
}
