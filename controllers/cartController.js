import Cart from "../models/cartModel.js";
import Product from "../models/products.model.js";


export const AllCarts = async(req, res) =>{
  try{
    const carts = await Cart.find({}).exec();
    if(!carts){
      return res.status(404).json({message: "no carts"})
    }
    else{
      return res.status(200).json(carts)
    }
    
  }catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
}}




export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.body.userId;

    const cartProducts = Array.isArray(req.body.products) ? req.body.products : [{ productId, quantity }];

    let cart = await Cart.findOne({ user_id: userId });

    // Check if cart already exists, if not, create a new one
    if (!cart) {
      cart = new Cart({
        user_id: userId,
        products: [],
        total_price: 0
      });
    }

    let totalPrice = cart.total_price;

    for (const cartProduct of cartProducts) {
      const { productId, quantity } = cartProduct;

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      if (product.productQuantity < quantity) {
        return res.status(400).json({ success: false, message: "Not enough quantity available" });
      }

      const price = product.productPrice;
      const total_price = price * quantity;

      const index = cart.products.findIndex((item) => item.product.toString() === productId);
      if (index === -1) {
        // Add new product to cart
        product.productQuantity -= quantity;
        await product.save();
        cart.products.push({ product: productId, quantity, price, total_price });
        totalPrice += total_price;
      } else {
        const availableQuantity = product.productQuantity + cart.products[index].quantity;
        if (quantity > availableQuantity) {
          return res.status(400).json({ success: false, message: "Not enough quantity available" });
        }
        cart.products[index].quantity += quantity;
        cart.products[index].total_price += total_price;
        product.productQuantity -= quantity;
        await product.save();
        totalPrice += total_price;
      }
    }

    cart.total_price = totalPrice;
    await cart.save();

    res.status(201).json({ success: true, cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

  
  
  

  

  
export const removeFromCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.body.userId;

    let cart = await Cart.findOne({ user_id: userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const index = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (index !== -1) {
      const product = await Product.findById(productId);
      const price = product.productPrice;
      const total_price = price * quantity;

      if (quantity > cart.products[index].quantity) {
        return res.status(400).json({ success: false, message: "Cannot remove more products than the quantity in the cart" });
      }

      cart.products[index].quantity -= quantity;
      cart.products[index].total_price -= total_price;

      if (cart.products[index].quantity === 0) {
        cart.products.splice(index, 1);
      }

      await cart.save();

      product.productQuantity += quantity;
      await product.save();

      if (cart.products.length === 0) {
        await Cart.findByIdAndDelete(cart._id);
      }
    }

    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
