import mongoose from "mongoose";
import UserSchema from "./schema";
import { IUserDocument, IUserModel } from "./types";

export const User = mongoose.model<IUserDocument, IUserModel>(
  "user",
  UserSchema
);
