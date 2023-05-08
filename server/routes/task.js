const express = require('express');
const router = express.Router();
const {
    createTask, getAllTasks, getSingleTask, updateTask, deleteTask, deleteAllTasks, createTaskComment,
} = require('../controllers/TaskController')

router.get('/:id', getSingleTask)
router.get('/', getAllTasks)

// router.post('/create', createTask)
router.post('/:id/comment', createTaskComment)
// router.post('/:id/upload', uploadFile)
router.put('/:id', updateTask)

router.delete('/:id', deleteTask)
router.delete('/', deleteAllTasks)

module.exports = router;