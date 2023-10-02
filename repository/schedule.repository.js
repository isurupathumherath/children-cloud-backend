import { Schedule } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveSchedule = (data) =>
  Schedule.create(data)
    .then((schedule) => {
      return Promise.resolve(schedule);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateSchedule = (id, data) =>
  Schedule.findByIdAndUpdate(id, data, { new: true })
    .then((schedule) => {
      if (!schedule) {
        throw new AppError("Schedule Not Found", 404);
      }
      return Promise.resolve(schedule);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateStaffSchedule = (id, staffID) =>
  Schedule.findByIdAndUpdate(id, { staffID }, { new: true })
    .then((schedule) => {
      if (!schedule) {
        throw new AppError("Schedule Not Found", 404);
      }
      return Promise.resolve(schedule);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteSchedule = (id) =>
  Schedule.findByIdAndDelete(id)
    .then((schedule) => {
      if (!schedule) {
        throw new AppError("Schedule Not Found", 404);
      }
      return Promise.resolve(schedule);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getSchedules = (id) =>
  Schedule.find({ childID: id })
    .then((schedule) => {
      return Promise.resolve(schedule);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getScheduleForStaff = (id) =>
  Schedule.find({ staffID: id })
    .then((schedules) => {
      return Promise.resolve(schedules);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
