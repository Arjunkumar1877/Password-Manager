import { User } from "../../../entities/types/user/User";
import { UserModel } from "../../../framework/database/models/user/UserModel";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    async CreateUser(user: User): Promise<User | any> {
      return UserModel.create(user);
    }

    async FindUserByEmail(email: string): Promise<User | null> {
      return UserModel.findOne({email: email});
    }

    async UpdateUserOtp(email: string, otp: string): Promise<User | null> {
      return UserModel.findOneAndUpdate({email: email}, {
        $set: {
          otp: otp
        }
      }, {new: true});
    }
}