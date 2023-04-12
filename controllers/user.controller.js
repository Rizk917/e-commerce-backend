import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import user from "../models/user.model.js";




const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password,role } = req.body

    if(!name || !email || !password||!role)
    {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await user.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await user.create ({
        name,
        email,
        role,
        password:hashedPassword
    })

    if(newUser){
        res.status(201).json({
            _id:newUser.id,
            name: newUser.name,
            email: newUser.email,
            role:newUser.role,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})


const getUsers= async (req, res) =>{
    const all_users = await user.find();

    res.json({
        message:"All users",
        status:200,
        data:all_users
    })
}


const loginUser = asyncHandler (async(req, res) => {
    const {email, password} = req.body

    const loginUser = await user.findOne({email})

    if(loginUser && (await bcrypt.compare(password, loginUser.password)) ) {
        res.json({
            _id:loginUser.id,
            name: loginUser.name,
            email: loginUser.email,
            role:loginUser.role,
            token: generateToken(user._id)

        })
    }else{
        res.status(400)
        throw new Error('Invalid Email Data')
    }

})



const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User data display' })
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: '30d',
    })
}

export default {registerUser, loginUser, getMe, getUsers}