const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['Female', 'Male'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee'
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    }
});

const User =  mongoose.model('User', UserSchema);
module.exports =User


