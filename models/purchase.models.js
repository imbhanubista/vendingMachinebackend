const mongoose = require("mongoose");
const Items = require("./items.models");

const purchaseSchema = mongoose.Schema({
  item_id: { type: String, ref: Items },
  purchaseQuantity: String,
  refCode: String,
});

const PurchaseItems = mongoose.model("PurchaseItems", purchaseSchema);

module.exports = PurchaseItems;
