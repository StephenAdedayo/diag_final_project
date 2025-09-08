import mongoose from 'mongoose'



const tipsSchema = new mongoose.Schema({


    title : {
        type : String,
        required : true
    },

    content : {
        type :  String,
        required : true
    },

    authorName: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String, 
  },

  category: {
    type: String,
    required: true,
  },

  specialization : {
    type : String,
    required : true
  }
  
}, { timestamps: true });

const tipsModel = mongoose.models.tips || mongoose.model("tips", tipsSchema)

export default tipsModel