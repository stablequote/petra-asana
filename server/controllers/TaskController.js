const Task = require('../models/tasks');

// createTask, getAllTasks, getSingleTask, updateTask, deleteTask 

const createTask = async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        return res.status(200).json({
          message: "Successfully added task!"
        })
    } catch (err) {
        console.log(err);
    }
}

const createTaskComment = async (req, res) => {
    const comment = req.body.comment;
    const { id } = req.params;
    try{
        const newComment = await Task.findByIdAndUpdate(id, { comment: comment })
        await newComment.save();
        return res.status(200).json({
            message: "Successfully created comment!"
        })
        res.redirect('/');
    }
    catch(err) {
        console.log(err);
    }
}

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
}

const getSingleTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id)
    res.send(task);
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body)
    res.send(task);
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id)
    res.send(task);
}

// delete all projects
const deleteAllTasks = async (req, res) => {
    const deletedTasks = await Task.remove()
    res.send(deletedTasks)
}


module.exports = {
    createTask, getAllTasks, getSingleTask, updateTask, deleteTask, deleteAllTasks, createTaskComment
}