
export interface IUserVerifyUsecase {
    VerifyUser(email: string, otp: string): Promise<boolean>
}