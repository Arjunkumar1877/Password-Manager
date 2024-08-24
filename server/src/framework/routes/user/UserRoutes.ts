import { Router } from 'express'
import { InjectedUserLoginController, InjectedUserResendOtpController, InjectedUserSignUpController, InjectedUserVerifyController } from '../../injection/user/UserInjections'
const userRoutes = Router()



userRoutes.post('/signup', InjectedUserSignUpController.SignupUserControl.bind(InjectedUserSignUpController));

userRoutes.post('/login', InjectedUserLoginController.LoginControl.bind(InjectedUserLoginController));

userRoutes.post('/verify', InjectedUserVerifyController.UserVerifyControl.bind(InjectedUserVerifyController));

userRoutes.post('/resend_otp', InjectedUserResendOtpController.ResendOtpControl.bind(InjectedUserResendOtpController));



export { userRoutes }
