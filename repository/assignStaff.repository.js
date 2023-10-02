import { AssignStaff } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveAssignedStaff = (data) =>
  AssignStaff.create(data)
    .then((assignedData) => {
      return Promise.resolve(assignedData);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateAssignedStaffStatus = (id, status) =>
  AssignStaff.findByIdAndUpdate(id, { status }, { new: true })
    .then((updatedStaffStatus) => {
      if (!updatedStaffStatus) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(updatedStaffStatus);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateAssignStaffData = (id, data) =>
  AssignStaff.findByIdAndUpdate(id, data, { new: true })
    .then((assignedStaff) => {
      if (!assignedStaff) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(assignedStaff);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateAssignedStaff = (id, staff) =>
  AssignStaff.findByIdAndUpdate(id, { staff }, { new: true })
    .then((updatedStaff) => {
      if (!updatedStaff) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(updatedStaff);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteAssignedStaff = (id) =>
  AssignStaff.findByIdAndDelete(id)
    .then((assignedData) => {
      if (!assignedData) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(assignedData);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getPendingStaff = (data) =>
  AssignStaff.find({ status: data })
    .then((pendingStaffs) => {
      return Promise.resolve(pendingStaffs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getStaffByChildID = (childID) =>
  AssignStaff.findOne({ childID })
    .then((staff) => {
      return Promise.resolve(staff);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getOtherStaffs = (data1, data2) =>
  AssignStaff.find({ $or: [{ status: data1 }, { status: data2 }] })
    .then((otherStaffs) => {
      return Promise.resolve(otherStaffs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAll = () =>
  AssignStaff.find()
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAssignedKidsForStaff = (id) =>
  AssignStaff.find({ staff: id })
    .then((staffs) => {
      return Promise.resolve(staffs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
