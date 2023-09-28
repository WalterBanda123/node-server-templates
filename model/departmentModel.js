const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, enum: ['Security', 'Software Development', 'Management'], required: true },
    manager: {
        type: String,
        required: true
    }
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;