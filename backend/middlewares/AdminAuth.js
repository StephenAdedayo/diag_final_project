import jwt from 'jsonwebtoken'



const authAdmin = async (req, res, next) => {


    try {
        const {token} = req.headers

        if(!token){
           return res.json({success: false, message : "not authorized, login again"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
         return res.json({success : false, message : "Not authorised"})
        }

        next()
    } catch (error) {
        console.log(error.message);
       return res.json({success: false, message : error.message})
        
    }

}

export default authAdmin