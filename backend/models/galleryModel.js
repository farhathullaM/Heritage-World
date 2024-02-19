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
          // Define foreign key reference to Monument model
        monumentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Monument' // Reference to the Monument model
        }
    },
    
    
    {
        timestamps:true,
            }
)
export const Gallery= mongoose.model('gallery',gallerySchema )