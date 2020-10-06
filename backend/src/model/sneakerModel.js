const mongoose = require("mongoose");

const sneakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
    size: {
      type: Array,
      require: true,
    },
    model: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sneaker", sneakerSchema);
