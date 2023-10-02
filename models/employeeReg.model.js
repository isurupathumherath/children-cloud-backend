import mongoose from "mongoose";

const { Schema } = mongoose;

const empSchema = new Schema(
  {
    empID: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    recruitDate: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Employee = mongoose.model("Employee", empSchema);
