const { append } = require("express/lib/response");
const { addItems, totalData } = require("../controllers/items.controller");
const { totalPrice } = require("../controllers/price.controller");
const { purchaseItems } = require("../controllers/purchase.controller");
const { refundItems } = require("../controllers/refund.controller");

const router = require("express").Router();

// to load all data first
router.get("/load", addItems);

// to show all data
router.get("/getall", totalData);

// purchase
router.post("/purchase", purchaseItems);

// to load default money
router.get("/cash", totalPrice);

// to refund items
router.post("/refund", refundItems);

module.exports = router;
