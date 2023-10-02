import {
  saveAssignedStaffService,
  updateAssignedStaffDataService,
  deleteAssignedStaffService,
  getAllAssignedStaffService,
  getPendingAssignedStaffService,
  getAssignedKidsForStaffService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveAssignStaffController = async (req, res) => {
  try {
    const assignStaff = await saveAssignedStaffService(req.body);
    // res.json(Success(assignStaff, " Successfully StaffAssigned to the child."));
    res.json(assignStaff);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateAssignStaffController = async (req, res) => {
  try {
    const assignedStaff = await updateAssignedStaffDataService(
      req.params.id,
      req.body,
    );
    res.json(Success(assignedStaff, "Successfully AssignedStaff Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteAssignStaffController = async (req, res) => {
  try {
    const assignStaff = await deleteAssignedStaffService(req.params.id);
    res.json(
      Success(assignStaff, "Successfully assigned staff details Deleted."),
    );
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllAssignedStaffController = async (req, res) => {
  try {
    const assignStaffs = await getAllAssignedStaffService();
    res.json(Success(assignStaffs, "Successfully Fetched Staff Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPendingAssignedStaffController = async (req, res) => {
  try {
    const assignStaffs = await getPendingAssignedStaffService();
    res.json(Success(assignStaffs, "Successfully Fetched Staff Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAssignedKidsForStaffController = async (req, res) => {
  try {
    const staffID = req.user._id;
    const kids = await getAssignedKidsForStaffService(staffID);
    res.json(Success(kids, "Successfully Fetched assigned Kids Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
