const mongoose = require("mongoose");

// schema

const itemsSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

// to create model
const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
