import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);
export default userModel;
