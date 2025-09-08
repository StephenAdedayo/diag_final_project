import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import validator from 'validator'


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const registerUser  = async (req, res) => {

    try {
        const {firstName, lastName, email, password} = req.body

        const user = await userModel.findOne({email})

        if(user){
            res.json({success: false, message: "User Already Exists"})
        }

        if(!validator.isEmail(email)){
            res.json({success: false, message : "Please enter a valid email"})
        }
        
        if(password.length < 8){
            res.json({success : false, message: "Password too short, please enter up to 8 Characters"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })

        await newUser.save()

        const token = createToken(newUser._id)

        res.json({success : true, token, message : 'User Registered Successfully'})


    } catch (error) {
        console.log(error.message);
        res.json({success : false, message: error.message})
        
    }

}

const loginUser = async (req, res) => {

          try {
            const {email, password}  = req.body

             const user = await userModel.findOne({email})

             if(!user){
                res.json({success: false, message: "User does not exist, please register"})
             }

             const isMatch = await bcrypt.compare(password, user.password)

             if(isMatch){
                const token = createToken(user._id)
                res.json({success: true, token, message:"Login successful"})
             }else{
                res.json({success : false, message: "Invalid credentials"})
             }

          } catch (error) {
            console.log(error.message);
            res.json({success: false, message : error.message})
            
          }
}

const loginAdmin = async (req, res) => {

    try {
        const {email, password} = req.body


        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success : true, token, message :"Admin login successful"})
        }else{
            res.json({success : false, message : "Not authorized"})
        }
    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : error.message})
        
    }

}

const getAllUsers = async (req, res) => {

    try {
        const users = await userModel.find({})


        if (users.length === 0) {
       return res.json({ success: false, message: "No users found" });
       }


        res.json({success : true, users})
    } catch (error) {
        console.log(error.message);
        res.json({success : false, message: error.message})
        
    }

}

const removeUser = async (req, res) => {

    try {
        const {id} = req.body

        const user = await userModel.findByIdAndDelete(id)

        if(!user){
            res.json({success: false, message: "user could not be deleted"})
        }

        res.json({success : true, message:"user deleted successfully"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message : error.message})
        
    }

}


export {loginUser, registerUser, loginAdmin, getAllUsers, removeUser}