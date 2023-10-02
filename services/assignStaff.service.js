import {
  saveAssignedStaff,
  deleteAssignedStaff,
  updateAssignStaffData,
  getAll,
  getPendingStaff,
  updateStaff,
  updateStaffSchedule,
  getMedicines,
  getSchedules,
  getAssignedKidsForStaff,
  getStaffByChildID,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveAssignedStaffService = async (data) => {
  const { childID, name, age, staff, status } = data;
  try {
    const staff2 = await getStaffByChildID(childID);
    if (staff2) {
      throw new AppError("Child already been Assigned.", 400);
    }
    const assignedStaff = await saveAssignedStaff({
      childID,
      name,
      age,
      staff,
      status,
    });
    await getMedicines(childID).then((medicines) => {
      medicines.forEach((medicine) => {
        updateStaff(medicine._id, staff);
      });
    });

    await getSchedules(childID).then((schedules) => {
      schedules.forEach((schedule) => {
        updateStaffSchedule(schedule._id, staff);
      });
    });

    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateAssignedStaffDataService = async (id, data) => {
  try {
    const assignedStaff = await updateAssignStaffData(id, data);
    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteAssignedStaffService = async (id) => {
  try {
    const assignedStaff = await deleteAssignedStaff(id);
    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllAssignedStaffService = async () => {
  try {
    const assignedStaffs = await getAll();
    return Promise.resolve(assignedStaffs);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPendingAssignedStaffService = async () => {
  try {
    const status = "pending";
    const assignedStaffs = await getPendingStaff(status);
    return Promise.resolve(assignedStaffs);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAssignedKidsForStaffService = async (id) => {
  try {
    const kids = await getAssignedKidsForStaff(id);
    return Promise.resolve(kids);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
