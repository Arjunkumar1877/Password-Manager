import { Router } from 'express'
import { InjectedUserLoginController, InjectedUserSignUpController } from '../../injection/user/UserInjections'
const userRoutes = Router()



userRoutes.post('/signup', InjectedUserSignUpController.SignupUserControl.bind(InjectedUserSignUpController));

userRoutes.post('/login', InjectedUserLoginController.LoginControl.bind(InjectedUserLoginController));



export { userRoutes }
