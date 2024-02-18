import mongoose from "mongoose";
const gallerySchema = mongoose.Schema(
    {
        imgTitle:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:false,
        },
        image:{
            type:String,
            required:true,
        },
    },
    
    {
        timestamps:true,
            }
)
export const Gallery= mongoose.model('gallery',gallerySchema )