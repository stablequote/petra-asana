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

// db connection
mongoose.connect(DB_URI).then(() => {
    console.log('Connected to DB!')
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mounting routes
app.use('/project', projectRouter)
app.use('/task', taskRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})