const mongoose = require('mongoose');
const Department = require('./../model/departmentModel');
const { StatusCodes } = require('http-status-codes')


const insertDepartments = async (req, res) => {
    try {
        const departments = [
            { _id: new mongoose.Types.ObjectId(), name: 'Security', manager: 'Rodson Bacela' },
            { _id: new mongoose.Types.ObjectId(), name: 'Software Development', manager: 'Walter Banda' },
            { _id: new mongoose.Types.ObjectId(), name: 'Management', manager: "Rodson" }
        ]
        const results = await Department.insertMany(departments);
        res.status(StatusCodes.OK).json({
            message: 'Successfully inserted the departments',
            results
        })
    } catch (error) {
        res.status(StatusCodes.BAD_GATEWAY).json({
            message: 'Failed to insert many',
            error
        })
    }

}

module.exports = {
    insertDepartments
}