const { append } = require("express/lib/response");
const { addItems, totalData } = require("../controllers/items.controller");
const { purchaseItems } = require("../controllers/purchase.controller");

const router = require("express").Router();

// to load all data first
router.get("/load", addItems);

// to show all data
router.get("/getall", totalData);

// purchase
router.post("/purchase", purchaseItems);

module.exports = router;
