/** @format */

// models/Product.js
import mongoose from 'mongoose';

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    // description: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    // inStock: {
    //   type: Boolean,
    //   default: true,
    // },
    // categories: [
    //   {
    //     type: String,
    //   },
    // ],
    // created: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  // {
  //   timestamps: true,
  // },
);

// Create a model from the schema
export const Product =
  mongoose.models.products || mongoose.model('products', productModel);
