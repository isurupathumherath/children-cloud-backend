import { Employee } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveEmployee = (data) =>
  Employee.create(data)
    .then((employee) => {
      return Promise.resolve(employee);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateEmployee = (id, data) =>
  Employee.findByIdAndUpdate(id, data, { new: true })
    .then((employee) => {
      if (!employee) {
        throw new AppError("Employee Not Found", 404);
      }
      return Promise.resolve(employee);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteEmployee = (id) =>
  Employee.findByIdAndDelete(id)
    .then((employee) => {
      if (!employee) {
        throw new AppError("Employee Not Found", 404);
      }
      return Promise.resolve(employee);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getEmployee = (id) =>
  Employee.findById(id)
    .then((employee) => {
      return Promise.resolve(employee);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllEmployee = (data = "") =>
  Employee.find(data)
    .then((employee) => {
      return Promise.resolve(employee);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
