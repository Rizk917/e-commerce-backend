import Product from "../models/products.model.js";




const getAll = async (req, res) =>{
    const allProduct = await Product.find();
    res.json({
        message:"All product",
        status:200,
        data:allProduct,
    })
}


const createProduct = async (req, res) =>{
        
    const {productName, productImage, productDescription, productPrice, category } = req.body;

    

    const product = new Product ({
        productName,
        productImage,
        productDescription,
        productPrice,
        category
    });
    console.log(req)

    try{
                const savedProduct = await product.save();
                res.json({
                    message:"Product created successfully",
                    status:201,
                    data:savedProduct,
                })
            }
    catch (error){
      
                res.json({
                    message:"Product created failed",
                    status:203,
                                }) 
            }
}


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
