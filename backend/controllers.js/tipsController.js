import tipsModel from "../models/tipsModel.js";
import { v2 as cloudinary } from "cloudinary";

export const addTips = async (req, res) => {
  try {
    const { title, content, authorName, category, specialization } = req.body;

    const image = req.file;

    console.log(title, content, authorName, category, specialization);

    const newImage = image ? image : undefined;

    console.log(newImage);

    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const imageUrl = result.secure_url;

    console.log(imageUrl);

    const tipData = {
      title,
      content,
      authorName,
      category,
      specialization,
      ...(imageUrl && { authorImage: imageUrl }),
    };

    const newTip = new tipsModel(tipData);

    await newTip.save();

    res.json({ success: true, message: "Tips added successfully" });
  } catch (error) {
    console.log();
    res.json({ success: false, message: error.message });
  }
};


export const getAllTips = async (req, res) => {

    try {
        const allTips = await tipsModel.find({})

        if(!allTips){
            res.json({success: false, message : "tips not found"})
        }

        res.json({success: true, message: 'All tips fetched', data : allTips})
    } catch (error) {
        console.log(error.message);
        res.json({succes: false, message : error.message})
        
    }

}

export const removeTips = async (req, res) => {

    try {

        const {id} = req.body

        const tip = await tipsModel.findByIdAndDelete(id)

        if(!tip){
           return res.json({success: false, message:'tips could not be deleted '})
        }

        res.json({success: true, message: 'tips deleted succesfully '})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message : error.message})
        
    }

}