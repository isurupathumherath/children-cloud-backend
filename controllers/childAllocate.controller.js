import {
  saveBabySitterService,
  deleteBabySitterService,
  updateBabySitterService,
  getAllBabySitterService,
  getBabySitterService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveBabySitterController = async (req, res) => {
  try {
    const babySitter = await saveBabySitterService(req.body);
    res.json(Success(babySitter, " Successfully Child Allocated"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateBabySitterController = async (req, res) => {
  try {
    const babySitter = await updateBabySitterService(req.params.id, req.body);
    res.json(Success(babySitter, "Successfully BabySitter Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteBabySitterController = async (req, res) => {
  try {
    const babySitter = await deleteBabySitterService(req.params.id);
    res.json(Success(babySitter, "Successfully BabySitter Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getBabySitterController = async (req, res) => {
  try {
    const babySitterID = req.params.id;
    const babySitter = await getBabySitterService(babySitterID);
    res.json(Success(babySitter, "Successfully get Child Allocation Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllBabySitterController = async (req, res) => {
  try {
    const babySitter = await getAllBabySitterService();
    res.json(Success(babySitter, "Successfully get child allocation Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
