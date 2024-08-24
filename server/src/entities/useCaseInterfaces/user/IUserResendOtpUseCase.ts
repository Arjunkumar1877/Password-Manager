
export interface IUserResendOtpUseCase{
 ResendOtp(email: string): Promise<boolean>;
}