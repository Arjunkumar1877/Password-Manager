import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
     type: String,
     required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);