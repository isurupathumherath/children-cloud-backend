import mongoose from "mongoose";

const { Schema } = mongoose;

const childAllocate = new Schema(
  {
    BabySitter: {
      type: String,
      required: true,
    },

    child01: {
      type: String,
      required: true,
    },
    child02: {
      type: String,
    },
    child03: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
);

export const BabySitter = mongoose.model("BabySitter", childAllocate);
