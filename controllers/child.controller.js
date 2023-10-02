import {
  saveChildService,
  updateChildService,
  deleteChildService,
  getChildsService,
  getAllChildsService,
  getStaffService,
  getSingleChildService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveChildController = async (req, res) => {
  try {
    const parentID = req.user._id;
    const child = await saveChildService(req.body, parentID);
    res.json(Success(child, " Successfully child Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateChildController = async (req, res) => {
  try {
    const child = await updateChildService(req.params.id, req.body);
    res.json(Success(child, "Successfully child Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteChildController = async (req, res) => {
  try {
    const child = await deleteChildService(req.params.id);
    res.json(Success(child, "Successfully child Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getChildsController = async (req, res) => {
  try {
    const parentID = req.user._id;
    const childs = await getChildsService(parentID);
    res.json(Success(childs, "Successfully childrens fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getChildstempController = async (req, res) => {
  try {
    const parentID = req.params.id;
    const childs = await getChildsService(parentID);
    res.json(Success(childs, "Successfully childrens fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllChildsController = async (req, res) => {
  try {
    const childs = await getAllChildsService();
    res.json(Success(childs, "Successfully childrens fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getStaffController = async (req, res) => {
  try {
    const role = "STAFF";
    const staffs = await getStaffService(role);
    res.json(Success(staffs, "Successfully Fetched All Staffs."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSingleChildController = async (req, res) => {
  try {
    const childID = req.params.id;
    const child = await getSingleChildService(childID);
    res.json(Success(child, "Successfully Fetched Single Child."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
