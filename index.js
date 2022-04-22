const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// database
const { connectMe } = require("./helpers/connections");
connectMe();
// router
const router = require("./routers/routers");
app.use(router);

// app lisitening
app.listen(port, (err) => {
  if (err) {
    console.log(`Port ${port} may already in use`);
  } else {
    console.log(`Happy Coding at port ${port}`);
  }
});
