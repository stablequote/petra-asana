const mongoose = require('mongoose');
const Attachment = require('./attachments')
const Comment = require('./comments')

const taskSchema = mongoose.Schema({
    id: {
        type: String,
    },
    key: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    assignee: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String
    },
    priority: {
        type: String
    },
    category: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        timestamps: true
    },
    updatedAt: {
        type: Date,
        // default: Date.now,
        timestamps: true
    },
    dueDate: {
        type: Date,
        timestamps: true
    },
    date: {
        type: Date,
        default: Date.now,
        timestamps: true
    },
    allDay: {
        type: Boolean,
        default: false,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    isViewed: {
        type: Boolean,
        default: false,
    },
    attachments: [{
        type: mongoose.Types.ObjectId, 
        ref: "Attachment"
    }],
    comments: [{
        type: mongoose.Types.ObjectId, 
        ref: "Comment"
    }],

})

// type - comments & replies - attachements - parent project - assigned user(name, avatar, position) - isViewed? - isLiked? - history - work log - key

const Task = mongoose.model('Task', taskSchema)
module.exports = Task