import {
  savePaymentInq,
  getPaymentInq,
  getPaymentInqById,
  getPaymentInqByBillId,
  getPaymentInqByPaymentId,
  updatePaymentInq,
  deletePaymentInq,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const savePaymentInqService = async (data) => {
  const {
    childId,
    paymentId,
    billId,
    type,
    contactNumber,
    emailAddress,
    description,
  } = data;
  try {
    const paymentInq = await savePaymentInq({
      childId,
      paymentId,
      billId,
      type,
      contactNumber,
      emailAddress,
      description,
    });
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqService = async () => {
  try {
    const paymentInq = await getPaymentInq();
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByIdService = async (id) => {
  try {
    const paymentInq = await getPaymentInqById(id);
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByBillIdService = async (id) => {
  try {
    const paymentInq = await getPaymentInqByBillId(id);
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByPaymentIdService = async (id) => {
  try {
    const paymentInq = await getPaymentInqByPaymentId(id);
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updatePaymentInqService = async (id, data) => {
  try {
    const paymentInq = await updatePaymentInq(id, data);
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deletePaymentInqService = async (id) => {
  try {
    const paymentInq = await deletePaymentInq(id);
    return Promise.resolve(paymentInq);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
