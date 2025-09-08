import express from 'express'
import "dotenv/config"
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import blogRouter from './routes/blogRoutes.js'
import cors from 'cors'
import predictRouter from './routes/predictRoutes.js'
import tipsRouter from './routes/tipsRoutes.js'

const server = express()


const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()


server.use(express.json())
server.use(cors())

server.use('/api/user', userRouter)
server.use('/api/blog', blogRouter)
server.use("/api/model", predictRouter)
server.use("/api/tips", tipsRouter)

server.get("/", (req, res) => {
     res.json({message : "Api Working"})
})


server.listen(PORT, "0.0.0.0", () => {
    console.log("server started successfuly on", PORT); 
})