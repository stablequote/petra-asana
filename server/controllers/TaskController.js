const Task = require('../models/tasks');
const Comment = require('../models/comments');
const path = require('path');
const fs = require("fs");
// const multer = require("multer");

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
        res.send(err)
    }
}

const createTaskComment = async (req, res) => {
    // console.log(req.body)
    // const comment = req.body.comment;
    const { id } = req.params;
    console.log(id)
    try{
        // const newComment = await Task.findByIdAndUpdate(id, { comment: comment })
        // await newComment.save();

        const comment = new Comment({text: req.body.text});
        await comment.save()
        console.log(comment)
        // const task = await Task.findByIdAndUpdate(id, {comments: [comment]});
        const task = await Task.findById(id)
        console.log(task.comments)

        const taskWithComment = await task.comments.push(comment)
        console.log(taskWithComment)

        res.status(200).json({
            message: "Successfully created comment!", taskWithComment
        })
        console.log(taskWithComment)
        console.log(task)
        // res.redirect('/');
    }
    catch(err) {
        console.log(err);
    }
}

const getAllTasks = async (req, res) => {
    const tasks = await Task.find().populate('comments');
    res.send(tasks);
}

const getSingleTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id)
    res.send(task);
}

// file upload end-point structure : /tasks/taskId/uploadFile
// const uploadFile = async (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// }

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
    createTask, getAllTasks, getSingleTask, updateTask, deleteTask, deleteAllTasks, createTaskComment, 
}