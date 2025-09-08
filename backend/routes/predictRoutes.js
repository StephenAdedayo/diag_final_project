import express from 'express'
import predict from '../controllers.js/predictControllers.js'
// import predictDiabetes from '../controllers.js/predictControllers.js'

const predictRouter = express.Router()

// predictRouter.post("/predict", predictDiabetes)
predictRouter.post("/predict", predict)

export default predictRouter

