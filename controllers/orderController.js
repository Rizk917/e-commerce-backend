import Cart from "../models/cartModel.js"
import Order from "../models/orderModel.js"


export const creatAnOrder = async (req, res) => {
  console.log("order")
  try {
    console.log(req.body)

    const userId = req.body.userId;

    const cart = await Cart.find({ user_id: userId }).exec();

    if (!cart) {
      return res.status(400).json("Cart not found");
    }

    const order = new Order({
      user: userId,
      shippingAddress: req.body.shippingAddress,
      phoneNumber: req.body.phoneNumber,
      cartItems: cart[0]._id,
      products: cart[0].products,
    });

    await order.save();

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};

export const getAllOrders = async (req,res)=>{
    try{
    const order = await Order.find({}).exec();
    if(!order){
        return res.status(404).json("no available order")
    }
    else{
        return res.status(200).json(order)
    }

  }catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};

export const getAnOrder = async (req,res) =>{
    const id = req.params.id
try {const order = await Order.findById(id)
if(!order){
  return  res.status(404).json('no available order')

}
else{
    return     res.status(200).json(order)

}
} catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
}

    export const updateAnOrder = async (req, res) => {
    const id =req.params.id
    try {const order = await Order.findById(id)
        if(!order){
        return  res.status(404).json('no available order')
        
        }
        else{
        order.shippingAddress = req.body.shippingAddress
        order.phoneNumber= req.body.phoneNumber
        await order.save();
        return res.status(200).json(order)
        
        }
        } catch (error) {
            console.error(error);
            return res.status(500).json("Server error");
          }
        }
        
        export const deleteAnOrder = async (req, res) =>{
           
try{
      await Order.findByIdAndDelete(id)
           return res.status(204).send("order deleted")
            
            }
            
            
        catch (error) {
            console.error(error);
            return res.status(500).json("Server error");
          }}