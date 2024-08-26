import { PasswordTypes } from "../../../entities/types/user/Password";
import { User } from "../../../entities/types/user/User";

export interface IUserRepository{
    CreateUser(user: User): Promise<User | any>;
    FindUserByEmail(email: string): Promise<User | null>;
    UpdateUserOtp(email: string, otp: string): Promise<User | null>;
    SavePassword(PassData: PasswordTypes): Promise<string>;
    UserVerifyUpdate(userId: string): Promise<boolean>;
    UserSaveNewPassword(email: string, password: string): Promise<boolean>;
    GetUserPassBook(userId: string, startDate: string, endData: string): Promise<any>;
} 