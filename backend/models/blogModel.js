import mongoose from "mongoose";



const blogSchema = new mongoose.Schema({

      title : {
        type : String,
        required : true
      },

      content : {
        type : String,
        required : true
      },

      images: {
        type : Array,
        required : true
      }, 

      author : {
        type : String,
        required : true
      }, 

      category : {
        type : String,
        required : true
      }, 

      summary : {
        type : String,
        required : true
      }, 

      date : {
        type : Number,
        required : true
      },

    published : {
    type : Boolean,
    default : false
    }



}, {timestamps : true})



const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)


export default blogModel