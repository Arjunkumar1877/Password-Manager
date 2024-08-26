import { User } from "../../entities/types/user/User";
import { IUserVerifyUsecase } from "../../entities/useCaseInterfaces/user/IUserVerifyUsecase";
import { IUserRepository } from "../../interfaceAdapters/repositories/user/IUserRepository";


export class UserVerifyUsecase implements IUserVerifyUsecase{
    constructor(private iuserrepository: IUserRepository){};

    async VerifyUser(email: string, otp: string): Promise<boolean> {
        try {
            const data: User | null = await this.iuserrepository.FindUserByEmail(email);

            if(data?._id && data){
                if(data.otp  === otp){
                    const update: any = this.iuserrepository.UserVerifyUpdate(data?._id);
                    if(update){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}