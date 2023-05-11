import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique:true},
    category: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    token: { type: String, required: true,unique:true},
    brand: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    producImg: { type: String, required: false },
  },
  {
    timestamps: true
  }
)
const Product = mongoose.model('Product', productSchema)
export default Product;
