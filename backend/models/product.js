const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const { Schema } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please eneter product name"],
    trim: true,
    maxLength: [100, "product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please eneter product name"],
    maxLength: [5, "product name cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please eneter product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select catagory for this product"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct catagory for product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please eneter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please eneter product stock"],
    maxLength: [5, "product name cannot exceed 5 characters"],
    default: 0,
  },
  nameOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
