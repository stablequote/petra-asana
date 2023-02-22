const express = require('express');
const router = express.Router();
const {
    createTask, getAllTasks, getSingleTask, updateTask, deleteTask, deleteAllTasks, createTaskComment
} = require('../controllers/TaskController')

router.get('/:id', getSingleTask)
router.get('/', getAllTasks)

router.post('/', createTask)
router.post('/comment', createTaskComment)
router.put('/:id', updateTask)

router.delete('/:id', deleteTask)
router.delete('/', deleteAllTasks)

module.exports = router;