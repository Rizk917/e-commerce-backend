import Order from '../models/order.model.js';
import asyncHandler from 'express-async-handler';

//@dec     Get Orders
//@rout    Get /order
//@access  private
const getAllOrder = asyncHandler(async (req, res) => {
  //
  const order = await Order.find();

  res.status(200).json(order);
});

//@dec     get one Order
//@rout    Get /order/:id
//@access  private
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error('no order with id ' + req.params.id);
  }
  res.status(200).json(order);
});

//@dec     Set Orders
//@rout    POST /order
//@access  private
const setOrder = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('please add an order ');
  }

  const order = await Order.create({
    Name: req.body.Name,
    Product: req.body.Product,
    PhoneNumber: req.body.PhoneNumber,
    Address: req.body.Address,
    Quantity: req.body.Quantity,
  });
  res.status(200).json(order);
});

//@dec     Update Order
//@rout    PUT /order/:id
//@access  private
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error('no order with id ' + req.params.id);
  }

  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedOrder);
});

//@dec     DELETE Order
//@rout    DELETE /order/:id
//@access  private
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndRemove(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error('no order with id ' + req.params.id);
  }
  res.status(200).json(order);
});

export default { getAllOrder, getOrder, setOrder, updateOrder, deleteOrder };
