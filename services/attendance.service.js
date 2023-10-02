import {
  saveAttendance,
  getAllAttendance,
  getAttendance,
  updateAttendance,
} from "../repository/index.js";

import AppError from "../utils/appError.js";

export const saveAttendanceService = async (data) => {
  const { EmpID, Status, Reason = "", Message = "" } = data;
  try {
    const attendance = await saveAttendance({
      EmpID,
      Status,
      Reason,
      Message,
    });
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAttendanceService = async (id) => {
  try {
    const attendance = await getAttendance(id);
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllAttendanceService = async () => {
  try {
    const attendance = await getAllAttendance();
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateAttendanceService = async (id) => {
  try {
    const attendance = await updateAttendance(id);
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
