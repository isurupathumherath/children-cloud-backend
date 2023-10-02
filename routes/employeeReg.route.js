import express from "express";

import {
  saveEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  getAllEmployeeController,
} from "../controllers/index.js";

const EmployeeRouter = express.Router();

EmployeeRouter.post("/add", saveEmployeeController);
EmployeeRouter.post("/", getAllEmployeeController);
EmployeeRouter.get("/:id", getEmployeeController);
EmployeeRouter.put("/:id", updateEmployeeController);
EmployeeRouter.delete("/:id", deleteEmployeeController);

export default EmployeeRouter;
