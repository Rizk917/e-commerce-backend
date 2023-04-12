import mongoose from "mongoose";
import ProductModel from './models/productModel.js';
import UserModel from "./models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const connection_URL = process.env.MONGO_URL;
mongoose.connect(connection_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const products = [
  {
    productName: "Product 1",
    productDescription: "This is product 1",
    productPrice: 10.50,
    productQuantity: 5,
    createdBy: "643498824d89db0aeaeb6faf", 
  },
  {
    productName: "Product 2",
    productDescription: "This is product 2",
    productPrice: 15.00,
    productQuantity: 3,
    createdBy: "643498824d89db0aeaeb6fb0", 
  },
  {
    productName: "Product 3",
    productDescription: "This is product 3",
    productPrice: 20.00,
    productQuantity: 8,
    createdBy: "643498824d89db0aeaeb6fb1", 
  },
  {
    productName: "Product 4",
    productDescription: "This is product 4",
    productPrice: 30.00,
    productQuantity: 2,
    createdBy: "643498824d89db0aeaeb6fb2", 
  },
];

const productSchemas = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: mongoose.Types.Decimal128, required: true },
  productQuantity: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});


delete mongoose.connection.models['Product'];

const Product = mongoose.model("Product", productSchemas);

Product.deleteMany({})
  .then(() => {
    return Product.insertMany(products);
  })
  .then((result) => {
    console.log(result.length + " products inserted.");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
