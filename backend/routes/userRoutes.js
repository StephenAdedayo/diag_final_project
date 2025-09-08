import express from 'express'
import { registerUser, loginUser, getAllUsers, loginAdmin, removeUser } from '../controllers.js/userControllers.js'
import authAdmin from '../middlewares/AdminAuth.js'
import authUser from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post("/loginUser",  loginUser)
userRouter.post("/registerUser", registerUser)
userRouter.post("/loginAdmin", loginAdmin)
userRouter.post("/allusers",authAdmin, getAllUsers)
userRouter.post("/removeuser", authAdmin, removeUser)



export default userRouter