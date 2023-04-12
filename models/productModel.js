import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;