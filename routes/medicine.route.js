import express from "express";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
  getMedicinesForStaffController,
  getMedicinesForParentController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const medicineRouter = express.Router();

medicineRouter.post("/", authenticate, saveMedicineController);
medicineRouter.delete("/:id", deleteMedicineController);
medicineRouter.put("/:id", updateMedicineController);
medicineRouter.get("/:id", getMedicinesController);
medicineRouter.get("/", authenticate, getMedicinesForStaffController);
medicineRouter.get("/parent/:id", getMedicinesForParentController);

export default medicineRouter;
