const User = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {

    const {email, password} = req.body;

    console.log(req.body)

    const user = await User.findOne({email: email})



        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )
    
        if(user){
           if(isPasswordValid){
            const token = jwt.sign(
                {
                    email: user.email,
                },
                'secret123'
            )
            res.send({message:"login sucess", token:token})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }

}


const registerUser = async (req, res) => {
    console.log(req.body) 

    const {email, password} = req.body;

    User.findOne({email:email}, async (err,user)=>{
        if(user){
            res.json({status: 'error', error: 'duplicate email'})
        }else {
            const newPassword = await bcrypt.hash(password, 10)
            
            const user = await new User({email: email, password: newPassword})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
}

// module.exports = {loginUser, registerUser}

module.exports = {
    loginUser,
    registerUser
}