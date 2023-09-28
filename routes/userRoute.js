const express = require('express');
const { getAllUsers, registerNewUser, getUserById, deleteUserById, updateUser } = require('./../controllers/usersController');
const router = express.Router()


router.post('/register', registerNewUser)
router.get('/all-users', getAllUsers)
router.get('/:userId', getUserById)
router.delete('/:userId', deleteUserById)
router.patch('/update-user/:userId', updateUser)
module.exports = router