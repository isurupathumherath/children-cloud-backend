import mongoose from "mongoose";

const { Schema } = mongoose;

const ScheduleSchema = new Schema(
  {
    childID: {
      type: String,
      required: true,
    },
    childName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    startingTime: {
      type: String,
      required: true,
    },
    endingTime: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    teacherName: {
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
  },
  { timestamps: true, versionKey: false },
);

export const Schedule = mongoose.model("Schedule", ScheduleSchema);
