import { Attendance } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveAttendance = (data) =>
  Attendance.create(data)
    .then((attendance) => {
      return Promise.resolve(attendance);
    })
    .catch(() => {
      throw new AppError("Internal server error", 500);
    });

export const getAttendance = (id) =>
  Attendance.find({ EmpID: id })
    .then((attendance) => {
      return Promise.resolve(attendance);
    })
    .catch(() => {
      throw new AppError("Internal server error", 500);
    });

export const getAllAttendance = (data) =>
  Attendance.find(data)
    .then((attendance) => {
      return Promise.resolve(attendance);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateAttendance = (id) =>
  Attendance.findByIdAndUpdate(id, { Approved: "Approved" }, { new: true })
    .then((attendance) => {
      if (!attendance) {
        throw new AppError("Attendance Not Found", 404);
      }
      return Promise.resolve(attendance);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
