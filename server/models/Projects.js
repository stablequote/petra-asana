const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;