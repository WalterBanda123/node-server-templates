const mongoose = require('mongoose');
const User = require('./../model/userModel');
const { StatusCodes } = require('http-status-codes')


const registerNewUser = async (req, res, next) => {
    try {
        const { firstName, lastName, age, gender, email, password, department, role } = req.body

        const createdUser = User({
            _id: new mongoose.Types.ObjectId(),
            firstName,
            lastName,
            age,
            gender,
            email,
            role,
            password,
            department: new mongoose.Types.ObjectId(department)

        });

        await createdUser.save();
        res.status(StatusCodes.OK).json({
            message: 'Successfully created a user',
            createdUser
        })

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Failed to create  a user',
            error
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(StatusCodes.ACCEPTED).json({
            message: 'Successfully fetched all users',
            users
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Failed to fetch users',
            error
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById({ _id: userId }).populate('department');
        res.status(StatusCodes.ACCEPTED).json({
            message: 'Successfully returned the user',
            user
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Failed to fetch user',
            error
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByIdAndDelete({ _id: userId })
        res.status(StatusCodes.ACCEPTED).json({
            message: 'Successfully returned the user',
            user
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Failed to fetch user',
            error
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const operations = {};
        for (const obj of req.body) {
            operations[obj.property] = obj.value;
        }

        const user = await User.findByIdAndUpdate({ _id: userId }, { $set: operations ,$new: true })

        console.log(operations);
        res.status(StatusCodes.ACCEPTED).json({
            message: 'Successfully returned the user',
            user
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Failed to fetch user',
            error
        })
    }
}



module.exports = {
    registerNewUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUser
}




