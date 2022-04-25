const Items = require("../models/items.models");
const PurchaseItems = require("../models/purchase.models");
const { customAlphabet } = require("nanoid");
const Amount = require("../models/cash.model");

exports.purchaseItems = async (req, res) => {
  let items = req.body.items;
  let cash = req.body.cash;
  let quantity = req.body.quantity;
  console.log(req.body);
  const nanoid = customAlphabet("ad1r2", 5)();
  console.log(nanoid);

  try {
    let detailData = await Items.findOne({ name: items });
    let depositeAmt = await Amount.findOne({});
    let returnCash = 0;
    let reqQuantity = quantity;
    console.log(depositeAmt);
    if (detailData === null) {
      res.json({
        type: "error",
        msg: "We don't have items",
      });
    }
    // to check whether the cash and quantity is number or not
    else if (isNaN(quantity) || isNaN(cash)) {
      res.json({
        type: "error",
        msg: "Invalid quantity or Cash",
      });
    } else if (quantity < 1 || quantity > 100) {
      res.json({
        type: "error",
        msg: "Quantity must be greater than 0 and less than 100",
      });
    } else if (cash < 0 || cash > 1000) {
      res.json({
        type: "error",
        msg: "Cash must be greate than 0 and less than 1000",
      });
    } else if (reqQuantity < 1) {
      res.json({
        type: "error",
        msg: "Order are out limit",
      });
    }

    // to calculate the paying price
    else {
      let payingPrice = reqQuantity * detailData.price;
      if (cash < payingPrice) {
        res.json({
          type: "error",
          msg: "Insufficient amount",
        });
      }

      //   to calculate the return money
      else {
        // let returnCash = 0;
        if (reqQuantity > detailData.quantity) {
          reqQuantity = detailData.quantity;
        }
        if (cash > payingPrice) {
          returnCash = cash - payingPrice;
        }

        console.log(returnCash, depositeAmt.cash);

        if (returnCash > depositeAmt.cash) {
          res.json({
            type: "error",
            msg: "Don't have sufficient balance to return",
          });
        } else {
          // to update the quantity after the purchase
          await Items.updateOne(
            { name: items },
            {
              $inc: {
                quantity: -reqQuantity,
              },
            }
          );
          let refCode = nanoid;
          // to save after customer purchased the items
          await new PurchaseItems({
            purchaseQuantity: reqQuantity,
            item_id: detailData._id,
            refCode,
            pricePerItem: detailData.price,
          }).save();

          // to update the price
          await Amount.updateOne(
            {},
            {
              $inc: {
                cash: payingPrice,
              },
            }
          );

          // here purchased is successful
          res.json({
            type: "success",
            msg: "Purchased successfully",
            data: {
              items,
              quantity,
              purchasedQuantity: reqQuantity,
              refCode,
              payingPrice,
              returnCash,
            },
          });
        }
      }
    }
  } catch (err) {
    res.json({
      type: "error",
      msg: err.message,
    });
  }
};
