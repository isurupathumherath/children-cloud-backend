import mongoose from "mongoose";

const { Schema } = mongoose;
//
const MedicineSchema = new Schema(
  {
    childID: {
      type: String,
      required: true,
    },
    childName: {
      type: String,
      required: true,
    },
    medicineName: {
      type: String,
      required: true,
    },
    morning: {
      type: String,
      required: true,
    },
    evening: {
      type: String,
      required: true,
    },
    beforAfterMeal: {
      type: String,
      required: true,
    },
    staffID: {
      type: String,
      default: "Staff didn't Assigned",
    },
    date: {
      type: String,
      default: "date did not added",
    },
    status: {
      type: String,
      default: "pending",
    },
    description: {
      type: String,
      default: "description not added for the above date",
    },
    parentID: {
      type: String,
      default: "sample ID",
    },
  },
  { timestamps: true, versionKey: false },
);

export const Medicine = mongoose.model("Medicine", MedicineSchema);
