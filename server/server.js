const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express();
const multer = require('multer');
const fs = require("fs")

// importing routes
const projectRouter = require('./routes/project');
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const PORT = process.env.port || 5000
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
const Task = require("./models/tasks");
const Attachment = require('./models/attachments');
const bodyParser = require('body-parser');
const User = require('./models/users');
const { loginUser } = require('./controllers/AuthController');


// db connection
mongoose.connect(DB_URI).then(() => {
    console.log('Connected to DB!')
})

mongoose.set('strictQuery', false)

const findIssue= async () => {
    const issues = await Issue.find({})
    console.log(issues)
}
const findTask = async () => {
    const tasks = await Task.find({})
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
    const tasks = await Task.insertMany([
        {
            "title": "manual task 1",
            "description": "adding task manually from node server.",
            "type": "agriculture",
            "assignee": "asaad",
            "assignedTo": "noone haha",
            "priority": "medium",
            "category": "not yet",
            "status": "ongoing",
            "allDay": false,
            "isFavourite": false,
            "isViewed": false,
            },
        {
            "title": "manual task 2",
            "description": "adding task manually from node server.",
            "type": "agriculture",
            "assignee": "asaad",
            "assignedTo": "noone haha",
            "priority": "medium",
            "category": "not yet",
            "status": "ongoing",
            "allDay": false,
            "isFavourite": true,
            "isViewed": false,
            },
    ])
    console.log(tasks)
}

// title - desc - assignee - assignedTo - category - status

// createIssue()
// findTask()
// createTask()


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/project', projectRouter)
app.use('/task', taskRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)

app.use(express.static('uploads'))

app.get("/tasks", async(req, res) => {
    const tasks = await TestTask.find({})
    res.send(tasks)
    return;
})

app.post("/tasks/create", async (req, res) => {
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
})

// upload attachment
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

app.get('/populate/:id', async (req, res) => {
    const {id} = req.params;

    const resComment  = await Task.findById(id).populate('comments')
    res.send(resComment)
})
 
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
    // const img = fs.readFileSync(req.file.path);
    // const encode_img = img.toString('base64');
    // const final_img = {
    //     // contentType:req.file.mimetype,
    //     image:new Buffer(encode_img,'base64')
    // };
    console.log(req.image)
    const final_img = req.image.path;
    Attachment.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
})


// app.post("/upload", upload.single("image", (req, res) => {
    
// }))



// authentication
app.post("/dashboard", loginUser, (req, res) => {
    res.redirect("/secret")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})