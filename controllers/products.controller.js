import Product from "../models/products.model.js";
import { v2 as cloudinary } from 'cloudinary'


// Configuration 
cloudinary.config({
  cloud_name: "didb7l6nz",
  api_key: "721724432988673",
  api_secret: "xhRyWzzuWWbgblhPRZ8cVk_Ss7Q"
});



const getAll = async (req, res) =>{
    const allProduct = await Product.find().populate('category');
    res.json({
        message:"All product",
        status:200,
        data:allProduct,
    })
}


const createProduct = async (req, res) => {
    const { productName, productDescription, productPrice, quantity, category } = req.body;
    try {
      let productImage = req.file.path; // get the path of the image from multer
      const uploadedImage = await cloudinary.uploader.upload(productImage); // upload the image to cloudinary
      const product = new Product({
        productName,
        productImage: uploadedImage.secure_url, // use the secure_url property of the uploaded image
        productDescription,
        productPrice,
        quantity,
        category,
      });
      const savedProduct = await product.save();
      res.status(201).json({
        message: "Product created successfully",
        data: savedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Product creation failed",
        error,
      });
    }
  };

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        if (!req.body.productName) {
            throw new Error("Product updated failed");
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body);
        res.json({
            message: "Product updated successfully",
            status: 200,
            data: updatedProduct,
        });
    } catch (error) {
        res.json({
            message: "Product updated failed",
            status: 203,
        });
    }
};


const deleteProduct = async (req, res) =>{
    const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        res.json({
            message:"Program deleted successfully",
            status:200,
            data:deletedProduct,
        })



    }


        // display all products with the categories fro each product

    const displayProductWithCategories = async (req, res) => {
    try{
    const products = await Product.find().populate('category');
    res.json({
        products
    })
    }
    catch (error) {
        
        console.error(error)
        res.json({
            message: "Product display failed",
            status: 203,
        });
    }
}


    // display products for each categories
    const displayProduct = async (req, res) => {
        const categoryId = req.params.id;
        try{
        const products = await Product.find({ category: categoryId});
        res.json({
            products
        })
        }
        catch (error) {
            
            console.error(error)
            res.json({
                message: "Product display failed",
                status: 203,
            });
        }


}







export default {getAll, createProduct, updateProduct, deleteProduct, displayProduct, displayProductWithCategories}