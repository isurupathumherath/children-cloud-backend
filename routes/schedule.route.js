import express from "express";
import {
  saveScheduleController,
  updateScheduleController,
  deleteScheduleController,
  getSchedulesController,
  getScheduleForStaffController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const scheduleRouter = express.Router();

scheduleRouter.post("/", saveScheduleController);
scheduleRouter.delete("/:id", deleteScheduleController);
scheduleRouter.put("/:id", updateScheduleController);
scheduleRouter.get("/:id", getSchedulesController);
scheduleRouter.get("/", authenticate, getScheduleForStaffController);

export default scheduleRouter;
