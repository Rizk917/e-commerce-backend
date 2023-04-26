// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema(
//   {
//     Id: {
//       type: String
//     },
//     Name: {
//       type: String,
//       required: [true, 'please add a Name '],
//     },
//     Product: {
//       // type: mongoose.Schema.Types.ObjectId,
//       // ref: 'product',
//       type: String,
//       required: [true, 'please add a product '],
//     },
//     PhoneNumber: {
//       type: Number,
//       required: [true, 'please add a Phone Number '],
//     },
//     Address: {
//       type: String,
//       required: [true, 'please add a product '],
//     },
//     Quantity: {
//       type: Number,
//       required: true,
//       min: [1, 'Quantity can not be less then 1.'],
//       default: 1
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order = mongoose.model("Order", orderSchema);
// export default Order;

