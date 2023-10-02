import express from "express";
import {
  savePaymentInqController,
  getPaymentInqController,
  getPaymentInqByIdController,
  updatePaymentInqController,
  deletePaymentInqController,
  getPaymentInqByBillIdController,
  getPaymentInqByPaymentIdController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const paymentInqRouter = express.Router();

paymentInqRouter.post("/add", savePaymentInqController);
paymentInqRouter.get("/", getPaymentInqController);
paymentInqRouter.get("/:id", getPaymentInqByIdController);
paymentInqRouter.get("/bill/:id", getPaymentInqByBillIdController);
paymentInqRouter.get("/payment/:id", getPaymentInqByPaymentIdController);
paymentInqRouter.put("/:id", updatePaymentInqController);
paymentInqRouter.delete("/:id", deletePaymentInqController);

export default paymentInqRouter;
