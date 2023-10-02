import { PaymentInq } from "../models/index.js";
import AppError from "../utils/appError.js";

export const savePaymentInq = (data) =>
  PaymentInq.create(data)
    .then((paymentInq) => {
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentInq = () =>
  PaymentInq.find({})
    .then((paymentInq) => {
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentInqById = (id) =>
  PaymentInq.findById(id)
    .then((paymentInq) => {
      if (!paymentInq) {
        throw new AppError("PaymentInq Details not Found", 404);
      }
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentInqByBillId = (id) =>
  PaymentInq.find({ billId: id })
    .then((paymentInq) => {
      if (!paymentInq) {
        throw new AppError("PaymentInq Details not Found", 404);
      }
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentInqByPaymentId = (id) =>
  PaymentInq.find({ paymentId: id })
    .then((paymentInq) => {
      if (!paymentInq) {
        throw new AppError("PaymentInq Details not Found", 404);
      }
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const updatePaymentInq = (id, data) =>
  PaymentInq.findByIdAndUpdate(id, data, { new: true })
    .then((paymentInq) => {
      if (!paymentInq) {
        throw new AppError("PaymentInq Details not Found", 404);
      }
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const deletePaymentInq = (id) =>
  PaymentInq.findByIdAndDelete(id)
    .then((paymentInq) => {
      if (!paymentInq) {
        throw new AppError("PaymentInq Details not Found", 404);
      }
      return Promise.resolve(paymentInq);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
