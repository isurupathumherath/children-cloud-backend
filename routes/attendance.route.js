import Express from "express";

import {
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
  updateAttenanceController,
} from "../controllers/index.js";

const AttendanceRoute = Express.Router();

AttendanceRoute.post("/save", saveAttendanceController);
AttendanceRoute.get("/:Date", getAttendanceController);
AttendanceRoute.get("/", getAllAttendanceController);
AttendanceRoute.put("/status/:id", updateAttenanceController);

export default AttendanceRoute;
