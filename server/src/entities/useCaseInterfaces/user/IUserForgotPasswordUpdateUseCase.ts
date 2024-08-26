export interface IUserForgotPasswordUpdateUseCase{
  UserAddNewPassword(email: string, password: string): Promise<boolean>;
}