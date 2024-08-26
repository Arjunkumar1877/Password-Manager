
export interface IUserGetPassbookUseCase{
 GetUserPassbook(userId: string, startDate: string, endDate: string): Promise<any>;
}