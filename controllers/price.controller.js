const Amount = require("../models/cash.model");
const { updateOne } = require("../models/cash.model");

const cashPrice = {
  cash: 100,
};

exports.totalPrice = async (req, res) => {
  let price = await Amount.countDocuments({});
  try {
    let { cash } = cashPrice;
    if (price < 1) {
      await new Amount({
        cash,
      }).save();
    }
    res.json({
      type: "success",
      msg: "Cash Loaded",
    });
  } catch (err) {
    res.json({
      type: "error",
      msg: err.message,
    });
  }
};
