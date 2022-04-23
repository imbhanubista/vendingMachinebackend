const mongoose = require('mongoose')

const priceSchema = mongoose.Schema({
    cash: Number
})

const Amount = mongoose.model("Amount", priceSchema)

module.exports = Amount