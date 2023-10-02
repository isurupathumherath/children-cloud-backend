import {
  savePaymentInqService,
  getPaymentInqByIdService,
  getPaymentInqService,
  updatePaymentInqService,
  deletePaymentInqService,
  getPaymentInqByBillIdService,
  getPaymentInqByPaymentIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const savePaymentInqController = async (req, res) => {
  try {
    const paymentInq = await savePaymentInqService(req.body);
    res.json(Success(paymentInq, "Payment Successfull"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentInqController = async (req, res) => {
  try {
    const payment = await getPaymentInqService();
    res.json(Success(payment, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentInqByIdController = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const paymentInq = await getPaymentInqByIdService(paymentId);
    res.json(Success(paymentInq, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentInqByBillIdController = async (req, res) => {
  try {
    const billId = req.params.id;
    const paymentInq = await getPaymentInqByBillIdService(billId);
    res.json(Success(paymentInq, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentInqByPaymentIdController = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const paymentInq = await getPaymentInqByPaymentIdService(paymentId);
    res.json(Success(paymentInq, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updatePaymentInqController = async (req, res) => {
  try {
    const paymentInq = await updatePaymentInqService(req.params.id, req.body);
    res.json(Success(paymentInq, "Successfully Payment Details Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deletePaymentInqController = async (req, res) => {
  try {
    const paymentInq = await deletePaymentInqService(req.params.id);
    res.json(Success(paymentInq, "Successfully Payment Detail Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
