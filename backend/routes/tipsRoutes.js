import express from 'express'
import authAdmin from '../middlewares/AdminAuth.js'
import { addTips, getAllTips, removeTips } from '../controllers.js/tipsController.js'
import upload from '../middlewares/Multer.js'

const tipsRouter = express.Router()


tipsRouter.post("/add", upload.single("authorImage"), addTips)
tipsRouter.post('/get', getAllTips)
tipsRouter.post('/remove', removeTips)


export default tipsRouter