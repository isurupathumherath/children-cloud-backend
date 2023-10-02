import { Medicine } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveMedicine = (data) =>
  Medicine.create(data)
    .then((medicine) => {
      return Promise.resolve(medicine);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateMedicine = (id, data) =>
  Medicine.findByIdAndUpdate(id, data, { new: true })
    .then((medicine) => {
      if (!medicine) {
        throw new AppError("Medicine Not Found", 404);
      }
      return Promise.resolve(medicine);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateStaff = (id, staffID) =>
  Medicine.findByIdAndUpdate(id, { staffID }, { new: true })
    .then((medicine) => {
      if (!medicine) {
        throw new AppError("Medicine Not Found", 404);
      }
      return Promise.resolve(medicine);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteMedicine = (id) =>
  Medicine.findByIdAndDelete(id)
    .then((medicine) => {
      if (!medicine) {
        throw new AppError("Medicine Not Found", 404);
      }
      return Promise.resolve(medicine);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getMedicines = (id) =>
  Medicine.find({ childID: id })
    .then((medicines) => {
      return Promise.resolve(medicines);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getMedicinesForStaff = (id) =>
  Medicine.find({ staffID: id })
    .then((medicines) => {
      return Promise.resolve(medicines);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getMedicinesForParents = (id) =>
  Medicine.find({ parentID: id })
    .then((medicines) => {
      return Promise.resolve(medicines);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
