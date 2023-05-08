const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;