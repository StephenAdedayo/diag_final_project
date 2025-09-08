import axios from 'axios'

const predict = async (req, res) => {
 try {

    // const qs = new URLSearchParams(req.body).toString();
    const response = await axios.post(`http://127.0.0.1:8000/predict?`, req.body);
  
    const predict = response.data
    
    res.json({success: true, data:predict.prediction})
 } catch (error) {
    res.json({success : false, error: error.message})
 }

}


export default predict