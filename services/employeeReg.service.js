import {
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployee,
} from "../repository/index.js";

import AppError from "../utils/appError.js";

export const saveEmployeeService = async (data) => {
  const {
    empID,
    fullName,
    address,
    nic,
    phoneNo,
    dob,
    recruitDate,
    image,
    type,
  } = data;
  try {
    const employee = await saveEmployee({
      empID,
      fullName,
      address,
      nic,
      phoneNo,
      dob,
      recruitDate,
      image,
      type,
    });
    return Promise.resolve(employee);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateEmployeeService = async (id, data) => {
  try {
    const employee = await updateEmployee(id, data);
    return Promise.resolve(employee);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteEmployeeService = async (id) => {
  try {
    const employee = await deleteEmployee(id);
    return Promise.resolve(employee);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getEmployeesService = async (id) => {
  try {
    const employee = await getEmployee(id);
    return Promise.resolve(employee);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllEmployeeService = async (data = null) => {
  try {
    const employee = await getAllEmployee(data);
    return Promise.resolve(employee);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
