import blogModel from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

const addBlog = async (req, res) => {
  try {
    const { title, content, summary, author, category, published } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    console.log(title, content, summary, author, category);

    console.log(image1, image2, image3, image4);

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    console.log(images);

      let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type : 'image'})
                return result.secure_url
            })
        )


      
    const blogData = {
      title,
      content,
      summary,
      author,
      category,
      images: imagesUrl,
      published: published === "true" ? true : false,
      date: Date.now(),
    };

       console.log(blogData);

    const newBlog = new blogModel(blogData);

    await newBlog.save();

    res.json({ success: true, message: "Blog added Successfully" });
  } catch (error) {
    console.log();
    res.json({ success: false, message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogModel.find({});

    if (!allBlogs) {
      res.json({ success: false, message: "no blogs found" });
    }

    res.json({ success: true, data: allBlogs , message: "fetched all blogs"});
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const {id}  = req.params;

    const singleBlog = await blogModel.findById(id);

    if (!singleBlog) {
      res.json({ success: false, message: "blog not found" });
    }

    res.json({ success: true, singleBlog });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, messsage: error.message });
  }
};

const removeBlog = async (req, res) => {
  try {
    const { id } = req.body;

    const blog = await blogModel.findByIdAndDelete(id);
    if(!blog){
      res.json({success: false, message:"could not delete blog"})
    }

    res.json({ success: true, message: "blog deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id, title, content, summary, author, category, published } =
      req.body;

      
    //   if (req.file) {
    //   updateFields.image = req.file.filename; // or req.file.path
    // }

    const updatedBlog = await blogModel.findByIdAndUpdate(id, {
      title,
      content,
      summary, 
      author,
      category,
      published  
    });

    if (!updatedBlog) {
      return res.json({ success: false, message: "blog not updated successfully" });
    }

    res.json({ success: true, message: "blog updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};



export { addBlog, getAllBlogs, getSingleBlog, removeBlog, updateBlog };
