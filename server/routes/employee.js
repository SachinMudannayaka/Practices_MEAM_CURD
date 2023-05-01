const express=require('express');
const Employee=require('../models/employee');


const router=express.Router();
//SAVE POSTS
router.post('/employee/save', async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json({
        success: 'Employee Saved Successfully',
        data: newEmployee,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });
  

//GET METHOD
router.get('/employee', async (req, res) => {
    try {
      const employees = await Employee.find();
      return res.status(200).json({
        success: true,
        data: employees,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });

//Get Specific data
router.get('/employee/:id', async (req, res) => {
    try {
      const employeeId = req.params.id;
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return res.status(404).json({
          success: false,
          message: 'Employee not found',
        });
      }
      return res.status(200).json({
        success: true,
        data: employee,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });


//Update Method
router.put('/employeeUpdate/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedEmployee,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

//DELETE POST
router.delete('/employeeDelete/:id', async (req, res) => {
    try {
      const employeeId = req.params.id;
      const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
      if (!deletedEmployee) {
        return res.status(404).json({
          success: false,
          message: 'Employee not found',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Employee deleted successfully',
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });
module.exports=router;