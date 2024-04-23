const express = require('express')
const router = express.Router()
const path = require('path')

// {getAllEmployees,createNewEmployees,updateEmployees,deleteEmployees,getEmployee}
const employeeController = require('../../controllers/employeeController')

router.route('/')
      .get(employeeController.getAllEmployees)
      .post(employeeController.createNewEmployees)
      .put(employeeController.updateEmployees)
      .delete(employeeController.deleteEmployees)
    
router.route('/:id')
      .get(employeeController.getEmployee)

module.exports = router