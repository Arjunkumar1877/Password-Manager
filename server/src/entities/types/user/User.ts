export interface User {
  _id?: string;
  username: string;
  email: string;
  password: string;
  verified?: boolean;
  otp: string;
  createdAt?: number;
  updatedAt?: number
}