const mongoose = require("mongoose");
const Items = require("./items.models");

const purchaseSchema = mongoose.Schema({
  item_id: { type: String, ref: Items },
  purchaseQuantity: Number,
  refCode: String,
  pricePerItem: Number
});

const PurchaseItems = mongoose.model("PurchaseItems", purchaseSchema);

module.exports = PurchaseItems;
