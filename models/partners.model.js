import mongoose from "mongoose";

const partnersSchema = mongoose.Schema(

    {
        image: {
            type:String,
            required:true,
        },
        link:{
            type:String,
            required:true,

    }
});
const partners = mongoose.model("partners", partnersSchema);
export default partners;