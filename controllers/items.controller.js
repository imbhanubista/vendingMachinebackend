const Items = require("../models/items.models");

const allItems = [
  {
    name: "Coke",
    price: 20,
    quantity: 10,
  },
  {
    name: "Pepsi",
    price: 25,
    quantity: 10,
  },
  {
    name: "Dew",
    price: 30,
    quantity: 10,
  },
];



exports.addItems = async (req, res) => {
  // to check the items are loaded or not
  let itemsData = await Items.countDocuments({});

  for (let items of allItems) {
    let { name, price, quantity } = items;
    try {
      if (itemsData < 1) {
        await new Items({
          name,
          price,
          quantity,
        }).save();
      } else {
        await Items.updateOne(
          { name },
          {
            $set: {
              quantity,
            },
          }
        );
      }
    
    }
    
    catch (err) {
      res.json({
        type: "error",
        msg: err.message,
      });
    }
  }
  res.json({
    type: "success",
    msg: "Data Added",
  });
};

// to get all the data
exports.totalData = async (req, res) => {
  try {
    let dataAll = await Items.find({}, "price quantity name -_id").lean();
    res.json({
      type: "success",
      msg: "List of data",
      data: dataAll,
    });
  } catch (err) {
    res.json({
      type: "error",
      msg: err.message,
    });
  }
};
