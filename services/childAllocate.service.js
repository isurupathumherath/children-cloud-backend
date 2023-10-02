import {
  saveBabySitter,
  updateBabySitter,
  deleteBabySitter,
  getAllBabySitter,
  getBabySitter,
} from "../repository/index.js";

import AppError from "../utils/appError.js";

export const saveBabySitterService = async (data) => {
  const { BabySitter, child01, child02, child03 } = data;
  try {
    const babySitter = await saveBabySitter({
      BabySitter,
      child01,
      child02,
      child03,
    });
    return Promise.resolve(babySitter);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateBabySitterService = async (id, data) => {
  try {
    const babySitter = await updateBabySitter(id, data);
    return Promise.resolve(babySitter);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteBabySitterService = async (id) => {
  try {
    const babySitter = await deleteBabySitter(id);
    return Promise.resolve(babySitter);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBabySitterService = async (id) => {
  try {
    const babySitter = await getBabySitter(id);
    return Promise.resolve(babySitter);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllBabySitterService = async () => {
  try {
    const babySitter = await getAllBabySitter();
    return Promise.resolve(babySitter);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
