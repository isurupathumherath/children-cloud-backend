import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  },
);

UserSchema.plugin(findOrCreate);

export const User = mongoose.model("User", UserSchema);
