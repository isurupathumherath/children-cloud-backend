import {
  saveAttendance,
  getAllAttendance,
  getAttendance,
} from "../repository/index.js";
import { updateAttendanceService } from "../services/index.js";

import Success from "../utils/success.js";

export const saveAttendanceController = async (req, res) => {
  try {
    const attendance = await saveAttendance(req.body);
    res.json(Success(attendance, " Successfully Employee Saved"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAttendanceController = async (req, res) => {
  try {
    const EmpID = req.user._id;
    const attendance = await getAttendance(EmpID);
    res.json(Success(attendance, "Successfully get Employee Attendance"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllAttendanceController = async (req, res) => {
  try {
    const attendance = await getAllAttendance();
    res.json(Success(attendance, "Successfully get Attendance Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateAttenanceController = async (req, res) => {
  try {
    const staffID = req.params.id;
    const attendance = await updateAttendanceService(staffID);
    res.json(Success(attendance, "Successfully Update Attendance Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
