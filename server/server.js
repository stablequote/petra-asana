const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express();

// importing routes
const projectRouter = require('./routes/project');
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user');

const PORT = process.env.port || 8080
const DB_URI = process.env.DB_URI

const localDB = "mongodb://localhost:27017/petra_dev"
// const Task = require('./models/tasks');

const issueSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: String,
    age: Number
})
const SampleTaskSchema = mongoose.Schema({
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

const Issue = mongoose.model("Issue", issueSchema)
const TestTask = mongoose.model("TestTask", SampleTaskSchema)

// db connection
mongoose.connect(DB_URI).then(() => {
    console.log('Connected to DB!')
})

const findIssue= async () => {
    const issues = await Issue.find({})
    console.log(issues)
}
const findTask = async () => {
    const tasks = await TestTask.find({})
    console.log(tasks)
}
const createIssue= async () => {[]
    const issues = await Issue.insertMany([
        {
            firstName: 'Molly',
            lastName: 'Purdy',
            email: 'Hugh.Dach79@hotmail.com',
            age: 37,
          },
          {
            firstName: 'Henry',
            lastName: 'Lynch',
            email: 'Camden.Macejkovic@yahoo.com',
            age: 20,
          },
          {
            firstName: 'Glenda',
            lastName: 'Douglas',
            email: 'Eric0@yahoo.com',
            age: 38,
          },
          {
            firstName: 'Leone',
            lastName: 'Williamson',
            email: 'Ericka_Mueller52@yahoo.com',
            age: 19,
          },
          {
            firstName: 'Mckenna',
            lastName: 'Friesen',
            email: 'Veda_Feeney@yahoo.com',
            age: 34,
          },
          {
            firstName: 'Wyman',
            lastName: 'Jast',
            email: 'Melvin.Pacocha@yahoo.com',
            age: 23,
          },
          {
            firstName: 'Janick',
            lastName: 'Willms',
            email: 'Delfina12@gmail.com',
            age: 25,
        },
    ])
    console.log(issues)

}

const createTask = async () => {
    const tasks = await TestTask.insertMany([
        {
            "title": "test task 1",
            "description": "a little demo testing db model",
            "assignee": "ben",
            "assignedTo": "user",
            "category": "development",
            "status": "ongoing",
        },
        {
            "title": "test task 2",
            "description": "a little demo testing db model",
            "assignee": "ben",
            "assignedTo": "user",
            "category": "development",
            "status": "done",
        },
        {
            "title": "test task 3",
            "description": "a little demo testing db model",
            "assignee": "ben",
            "assignedTo": "user",
            "category": "development",
            "status": "to-do",
        }
    ])
    console.log(tasks)
}

// title - desc - assignee - assignedTo - category - status

// createIssue()
findTask()
// createTask()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/project', projectRouter)
app.use('/task', taskRouter)
app.use('/user', userRouter)

app.get("/tasks", async(req, res) => {
    const tasks = await TestTask.find({})
    res.send(tasks)
    return;
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})