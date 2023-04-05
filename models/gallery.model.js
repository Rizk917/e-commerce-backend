import mongoose from "mongoose";

const gallerySchema = mongoose.Schema(

    {
        category: {
            type:String,
            required:true,
        },
        project_Name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
        }

    }
);
const gallery = mongoose.model("gallery", gallerySchema);
export default gallery;