import express from "express";

import {
  saveBabySitterController,
  deleteBabySitterController,
  updateBabySitterController,
  getAllBabySitterController,
  getBabySitterController,
} from "../controllers/index.js";

const BabySitterRouter = express.Router();

BabySitterRouter.post("/add", saveBabySitterController);
BabySitterRouter.get("/", getAllBabySitterController);
BabySitterRouter.get("/:id", getBabySitterController);
BabySitterRouter.put(":/id", updateBabySitterController);
BabySitterRouter.delete("/:id", deleteBabySitterController);

export default BabySitterRouter;
