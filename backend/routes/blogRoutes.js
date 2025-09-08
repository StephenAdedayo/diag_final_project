import express from 'express'
import upload from '../middlewares/Multer.js'
import {addBlog, getAllBlogs, getSingleBlog, removeBlog, updateBlog} from '../controllers.js/blogControllers.js'
import authAdmin from '../middlewares/AdminAuth.js'


const blogRouter = express.Router()


blogRouter.post('/add', upload.fields([{name : "image1", maxCount: 1}, {name : "image2", maxCount : 1}, {name : "image3", maxCount : 1}, {name : "image4", maxCount : 1}]), authAdmin, addBlog)
blogRouter.get("/getblogs",  getAllBlogs)
blogRouter.get("/singleblog/:id", getSingleBlog)
blogRouter.post("/removeblog", authAdmin, removeBlog)
blogRouter.put("/updateblog", upload.none(), authAdmin, updateBlog)

export default blogRouter