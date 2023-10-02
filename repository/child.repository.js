import { Child, User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveChild = (data) =>
  Child.create(data)
    .then((child) => {
      return Promise.resolve(child);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateChild = (id, data) =>
  Child.findByIdAndUpdate(id, data, { new: true })
    .then((child) => {
      if (!child) {
        throw new AppError("Child Not Found", 404);
      }
      return Promise.resolve(child);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteChild = (id) =>
  Child.findByIdAndDelete(id)
    .then((child) => {
      if (!child) {
        throw new AppError("Child Not Found", 404);
      }
      return Promise.resolve(child);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getChilds = (id) =>
  Child.find({ parentID: id })
    .then((childs) => {
      return Promise.resolve(childs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllChilds = () =>
  Child.find()
    .then((childs) => {
      return Promise.resolve(childs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllStaffUser = (role) =>
  User.find({ role })
    .then((staffs) => {
      return Promise.resolve(staffs);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getChildByID = (id) =>
  Child.findById(id)
    .then((child) => {
      if (!child) {
        throw new AppError("Payment Details not Found", 404);
      }
      return Promise.resolve(child);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
