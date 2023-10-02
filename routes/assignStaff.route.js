import express from "express";
import {
  saveAssignStaffController,
  updateAssignStaffController,
  deleteAssignStaffController,
  getAllAssignedStaffController,
  getAssignedKidsForStaffController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const AssignStaffRouter = express.Router();

AssignStaffRouter.post("/", saveAssignStaffController);
AssignStaffRouter.delete("/:id", deleteAssignStaffController);
AssignStaffRouter.put("/:id", updateAssignStaffController);
AssignStaffRouter.get("/", getAllAssignedStaffController);
AssignStaffRouter.get("/kids", authenticate, getAssignedKidsForStaffController);

export default AssignStaffRouter;
