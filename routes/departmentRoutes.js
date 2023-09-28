const express =  require('express');
const router =  express.Router();
const {insertDepartments} = require('./../controllers/departmentController')

router.get('/', insertDepartments)

module.exports = router