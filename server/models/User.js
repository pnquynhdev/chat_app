import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
    },
    username: { type: String, unique: true},
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
