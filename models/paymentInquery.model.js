import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentInqSchema = new Schema(
  {
    childId: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: false,
    },
    BillId: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const PaymentInq = mongoose.model("PaymentInq", PaymentInqSchema);
