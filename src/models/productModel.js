import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      prod_type:{
        type:String,
        required:true
      },
      color:{
        type:String,
        required:true
      },
      imageUrl: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const Product = mongoose.models.Products || mongoose.model('Products',productSchema)
export default Product;