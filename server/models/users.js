const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    id:{
        type: String,
        unique: true,
        required: true,
        default: Math.floor(Math.random(5) * 1000)
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        timestamps: true
    },
    modifiedAt: {
        type: Date,
        default: Date.now,
        timestamps: true
    },
    tasks: {
        type: Schema.Types.ObjectId
    },
    projects: {
        type: Schema.Types.ObjectId,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User