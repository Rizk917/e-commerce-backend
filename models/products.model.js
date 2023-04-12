import mongoose from "mongoose";

const productSchema = mongoose.Schema(

    {
        
        productName:{
            type:String,
            required:true,
        },

        productImage: {
            type:String,
            required:true,
        },

        productDescription:{
            type:String,
        },

        productPrice:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        category: 
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required:true
        }
        
        


    }
);

const Product = mongoose.model("Product", productSchema);
export default Product;