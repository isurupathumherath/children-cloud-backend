import {
  saveScheduleService,
  updateScheduleService,
  deleteScheduleService,
  getSchedulesService,
  getSchedulesForStaffService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveScheduleController = async (req, res) => {
  try {
    const schedule = await saveScheduleService(req.body);
    res.json(Success(schedule, " Successfully Schedule Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateScheduleController = async (req, res) => {
  try {
    const schedule = await updateScheduleService(req.params.id, req.body);
    res.json(Success(schedule, "Successfully Schedule Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteScheduleController = async (req, res) => {
  try {
    const schedule = await deleteScheduleService(req.params.id);
    res.json(Success(schedule, "Successfully Schedule Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSchedulesController = async (req, res) => {
  try {
    const childID = req.params.id;
    const schedules = await getSchedulesService(childID);
    res.json(Success(schedules, "Successfully Fetched Schedules Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getScheduleForStaffController = async (req, res) => {
  try {
    const staffID = req.user._id;
    const schedules = await getSchedulesForStaffService(staffID);
    res.json(Success(schedules, "Successfully Fetched Medicines Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
