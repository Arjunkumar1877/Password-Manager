import { Router } from 'express'
import { InjectedUserLoginController, InjectedUserResendOtpController, InjectedUserSavepasswordController, InjectedUserSignUpController, InjectedUserVerifyController } from '../../injection/user/UserInjections'
import { PasswordModel } from '../../database/models/user/PasswordsModel';
const userRoutes = Router()



userRoutes.post('/signup', InjectedUserSignUpController.SignupUserControl.bind(InjectedUserSignUpController));

userRoutes.post('/login', InjectedUserLoginController.LoginControl.bind(InjectedUserLoginController));

userRoutes.post('/verify', InjectedUserVerifyController.UserVerifyControl.bind(InjectedUserVerifyController));

userRoutes.post('/resend_otp', InjectedUserResendOtpController.ResendOtpControl.bind(InjectedUserResendOtpController));

userRoutes.post('/save_password', InjectedUserSavepasswordController.UserSavePasswordControl.bind(InjectedUserSavepasswordController));


userRoutes.post('/get_passwords', async(req, res)=>{
    const startDate = req.body.startDate;
    const endData = req.body.endDate;
    const userId = req.body.userId;
    let passwords;
    

    if(startDate && endData){

         passwords = await PasswordModel.find({
            user: userId,
            createdAt: {
                $gte: new Date(startDate),
                $lte: new Date(endData)
            }
        }).exec();
    
    }else{
         passwords = await PasswordModel.find({user: userId }).exec();
    
    }

    res.json(passwords);

})

export { userRoutes }
