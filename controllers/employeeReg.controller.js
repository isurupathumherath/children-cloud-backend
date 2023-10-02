import {
  saveEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
  getEmployeesService,
  getAllEmployeeService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveEmployeeController = async (req, res) => {
  try {
    const employee = await saveEmployeeService(req.body);
    res.json(Success(employee, " Successfully Employee Saved"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateEmployeeController = async (req, res) => {
  try {
    const employee = await updateEmployeeService(req.params.id, req.body);
    res.json(Success(employee, "Successfully Employee Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteEmployeeController = async (req, res) => {
  try {
    const employee = await deleteEmployeeService(req.params.id);
    res.json(Success(employee, "Successfully Employee Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getEmployeeController = async (req, res) => {
  try {
    const empId = req.params.id;
    const employee = await getEmployeesService(empId);
    res.json(Success(employee, "Successfully get Employee Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllEmployeeController = async (req, res) => {
  try {
    const employee = await getAllEmployeeService(req.body.filter);
    res.json(Success(employee, "Successfully get Employees Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
