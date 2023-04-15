const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/UserController');

// create user (post)
router.post('/create', createUser)

// list all users
router.get('/', getUsers)

// list single user
router.get('/:id', getUser)

// update issues
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)

module.exports = router;