import mongoose, { Schema } from "mongoose";

const registerSchema = mongoose.Schema(

    {
        full_name: {
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,
        },
        school_name: {
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
            unique:true

        },
        phone:{
            type:String,
            required:true,
        },
        age:{
            type:String,

        },
        Major:{
            type:String,

        },
        university_name:{
            type:String
        },
        

    }
);
const register = mongoose.model("register", registerSchema);
export default register;