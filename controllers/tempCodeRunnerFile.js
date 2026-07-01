const mongoose = require("mongoose");
const Employee = require("../model/employeeSchema");

let memoryEmployees = [];
let nextMemoryId = 1;

const isMongoReady = () => mongoose.connection.readyState === 1;

const getAllEmployees = async (req, res) => {
  try {
    if (isMongoReady()) {
      const employees = await Employee.find().sort({ createdAt: -1 });
      return res.status(200).json(employees);
    }

    const employees = [...memoryEmployees].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employees",
      error: error.message
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    if (isMongoReady()) {
      const employee = await Employee.findById(req.params.id);

      if (!employee) {
        return res.status(404).json({ message: "Employee Not Found" });
      }

      return res.status(200).json(employee);
    }

    const employee = memoryEmployees.find((item) => item._id === req.params.id || item.id === req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    return res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employee",
      error: error.message
    });
  }
};

const addEmployee = async (req, res) => {
  try {
    const { name, department, salary } = req.body;

    if (!name || !department || salary === undefined) {
      return res.status(400).json({
        message: "Name, department, and salary are required"
      });
    }

    if (isMongoReady()) {
      const newEmployee = new Employee({
        name,
        department,
        salary: Number(salary)
      });

      await newEmployee.save();

      return res.status(201).json({
        message: "Employee Added Successfully",
        employee: newEmployee
      });
    }

    const newEmployee = {
      _id: String(nextMemoryId++),
      name,
      department,
      salary: Number(salary),
      createdAt: new Date().toISOString()
    };

    memoryEmployees.unshift(newEmployee);

    return res.status(201).json({
      message: "Employee Added Successfully",
      employee: newEmployee
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add employee",
      error: error.message
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    if (isMongoReady()) {
      const employee = await Employee.findById(req.params.id);

      if (!employee) {
        return res.status(404).json({ message: "Employee Not Found" });
      }

      const { name, department, salary } = req.body;

      if (name !== undefined) employee.name = name;
      if (department !== undefined) employee.department = department;
      if (salary !== undefined) employee.salary = Number(salary);

      await employee.save();

      return res.status(200).json({
        message: "Employee Updated Successfully",
        employee
      });
    }

    const employee = memoryEmployees.find((item) => item._id === req.params.id || item.id === req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    const { name, department, salary } = req.body;

    if (name !== undefined) employee.name = name;
    if (department !== undefined) employee.department = department;
    if (salary !== undefined) employee.salary = Number(salary);

    return res.status(200).json({
      message: "Employee Updated Successfully",
      employee
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update employee",
      error: error.message
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    if (isMongoReady()) {
      const employee = await Employee.findByIdAndDelete(req.params.id);

      if (!employee) {
        return res.status(404).json({ message: "Employee Not Found" });
      }

      return res.status(200).json({
        message: "Employee Deleted Successfully"
      });
    }

    const index = memoryEmployees.findIndex((item) => item._id === req.params.id || item.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    memoryEmployees.splice(index, 1);

    return res.status(200).json({
      message: "Employee Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete employee",
      error: error.message
    });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};