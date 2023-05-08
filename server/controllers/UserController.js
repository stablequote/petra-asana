const User = require('../models/users');

// createuser, getUsers, getUser, updateUser, deleteUser 

const createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
          message: "Successfully added user!"
        })
    } catch (err) {
        console.log(err);
    }
}

const getUsers = async (req, res) => {
    const users = await User.find({});
    res.send(users);
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    res.send(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, {})
    res.send(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id)
    res.send(user);
}

module.exports = {
    createUser, getUsers, getUser, updateUser, deleteUser
}