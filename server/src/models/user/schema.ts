import bcrypt from "bcrypt";
import { Schema } from "mongoose";
import { IUser, IUserDocument } from "./types";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please add a name"],
    maxLength: 50,
  },

  lastName: {
    type: String,
    required: [true, "Please add a last name"],
    maxLength: 50,
  },

  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },

  role: {
    type: String,
    enum: ["user", "publisher"],
    default: "user",
  },

  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },

  resetPasswordToken: String,

  resetPasswordExpire: Date,

  confirmEmailToken: String,

  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },

  twoFactorCode: String,

  twoFactorCodeExpire: Date,

  twoFactorEnable: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
} as Record<keyof IUser, any>);

// Get full name
UserSchema.virtual("fullName").get(function (this: IUserDocument) {
  return [this.firstName, this.lastName].join(" ");
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (this: IUserDocument, next: Function) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default UserSchema;
