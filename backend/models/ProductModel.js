const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a product name'],
      trim: true,
      maxlength: 100,
    },
    brand: {
      type: String
    },
    rating: {
      type: Number,
      default: 0
    },
    thumbnail: {
      type: String
    },
    images: [],
    price: {
      type: Number
    },
    description: String,
    specifications: String,
    comments: [],
    stock: Number,
    discountPercentage: Number,
    category: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Product', productSchema)
