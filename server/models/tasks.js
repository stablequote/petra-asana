const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: true
    },
    assignedTo: {
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
        default: Date.now,
        timestamps: true
    },
    dueDate: {
        type: Date,
        timestamps: true
    }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task