import { Router } from 'express'
import { InjectedUserForgotPasswordUpdateController, InjectedUserGetPassbookController, InjectedUserLoginController, InjectedUserResendOtpController, InjectedUserSavepasswordController, InjectedUserSignUpController, InjectedUserVerifyController } from '../../injection/user/UserInjections'
import { PasswordModel } from '../../database/models/user/PasswordsModel';
const userRoutes = Router()



userRoutes.post('/signup', InjectedUserSignUpController.SignupUserControl.bind(InjectedUserSignUpController));

userRoutes.post('/login', InjectedUserLoginController.LoginControl.bind(InjectedUserLoginController));

userRoutes.post('/verify', InjectedUserVerifyController.UserVerifyControl.bind(InjectedUserVerifyController));

userRoutes.post('/resend_otp', InjectedUserResendOtpController.ResendOtpControl.bind(InjectedUserResendOtpController));

userRoutes.post('/save_password', InjectedUserSavepasswordController.UserSavePasswordControl.bind(InjectedUserSavepasswordController));

userRoutes.post('/update_forgot_password', InjectedUserForgotPasswordUpdateController.UserAddNewPasswordControll.bind(InjectedUserForgotPasswordUpdateController));

userRoutes.post('/get_passwords', InjectedUserGetPassbookController.GetUserPassbookControl.bind(InjectedUserGetPassbookController));


userRoutes.post("/delete_password", async(req, res)=>{
    const deleted = await PasswordModel.findOneAndDelete({_id: req.body.id});

    if(deleted){
        const passwords = await PasswordModel.find({user: req.body.userId})
        res.json({deleted: true, passwords: passwords});
    }else{
        res.json({deleted: false, Passwords: ""});
    }
})

export { userRoutes }
