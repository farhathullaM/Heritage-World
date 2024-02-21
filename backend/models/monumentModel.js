import mongoose from "mongoose";
 
const monumentSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        cover_image: {
            type: String,
            required: true,
          },
        shortdescription:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        hst_chronology:{
            type:String,
            required:false,
        },
         ipms_place:{
            type:String,
            required:false,
        },
        archi_imps:{
            type:String,
            required:false,
        },
        past_condition:{
            type:String,
            required:false,
        },
        present_condition:{
            type:String,
            required:false,
        },
        location:{
            type:String,
            required:false,
        },
        nation:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        place:{
            type:String,
            required:true,
        },
        user:{
            type:String,
            required:false,
        },
        status:{
            type:String,
            required:false,
        },
        trash:{
            type:String,
            required:false,
        },

    },
    {
timestamps:true,
    }
);
export const Monument= mongoose.model('monument',monumentSchema )