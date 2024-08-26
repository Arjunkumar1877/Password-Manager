import { PasswordTypes } from "../../../entities/types/user/Password";
import { User } from "../../../entities/types/user/User";
import { PasswordModel } from "../../../framework/database/models/user/PasswordsModel";
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

    async  SavePassword(PassData: PasswordTypes): Promise<string> {
            const userData: PasswordTypes = {
          user: PassData.user,
          name: PassData.name,
          password: PassData.password        
        };
    
        const savedPassword = await PasswordModel.create(userData);
    if(savedPassword){
      return 'saved'
    }else{
      return 'failed'
    }
      
    }

    async UserVerifyUpdate(userId: string): Promise<boolean> {
       const updatedUser = await UserModel.findOneAndUpdate({_id: userId}, {
        $set: {
          verified: true
        }
       }, {new: true});

       if(updatedUser){
        return true
       }else{
        return false;
       }
    }

    async UserSaveNewPassword(email: string, password: string): Promise<boolean> {
      const updated = await UserModel.findOneAndUpdate({email: email},{
        password: password
      }, {new: true});
    
      if(updated){
        return true;
      }else{
        return false;
      }

    }

    async GetUserPassBook(userId: string, startDate?: string, endDate?: string): Promise<any> {
      let passwords;
    

      if (startDate && endDate) {
        if (startDate !== '' && endDate !== '') {
          
          passwords = await PasswordModel.find({
            user: userId,
            createdAt: {
              $gte: new Date(startDate),
              $lte: new Date(endDate),
            },
          })
            .sort({ createdAt: -1 }) 
            .exec();
    
          return passwords;
        } else {
          return [];
        }
      } else {
        
        passwords = await PasswordModel.find({ user: userId })
          .sort({ createdAt: -1 }) 
          .exec();
    
        return passwords;
      }
    }
    
   
}