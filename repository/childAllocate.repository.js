import { BabySitter } from "../models/childAllocate.model.js";
import AppError from "../utils/appError.js";

export const saveBabySitter = (data) =>
  BabySitter.create(data)
    .then((babySitter) => {
      return Promise.resolve(babySitter);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateBabySitter = (id, data) =>
  BabySitter.findByIdAndUpdate(id, data, { new: true })
    .then((babySitter) => {
      if (!babySitter) {
        throw new AppError("BabySitter Not Found", 404);
      }
      return Promise.resolve(babySitter);
    })
    .catch(() => {
      throw new AppError("Internal Server Error.", 500);
    });

export const deleteBabySitter = (id) =>
  BabySitter.findByIdAndDelete(id)
    .then((babySitter) => {
      if (!babySitter) {
        throw new AppError("BabySitter Not Found", 404);
      }
      return Promise.resolve(babySitter);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getBabySitter = (id) =>
  BabySitter.findById(id)
    .then((babySitter) => {
      return Promise.resolve(babySitter);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllBabySitter = (data) =>
  BabySitter.find(data)
    .then((babySitter) => {
      return Promise.resolve(babySitter);
    })
    .catch(() => {
      throw new AppError("Interna; server error.", 500);
    });
