import { Model, Document, Types } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "publisher";
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  confirmEmailToken?: string;
  isEmailConfirmed?: boolean;
  twoFactorCode?: string;
  twoFactorCodeExpire?: Date;
  twoFactorEnable?: boolean;
  createdAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  fullName: string;
}

export interface IUserModel extends Model<IUserDocument> {}
