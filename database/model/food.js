const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
  name: {type: String, require: true},
  foods: [{
    name: String,
    price: Number,
    description: String,
    sellCount: Number,
    info: String,
    image: String,
    size: String,
    valid: String,
    date: String,
    store: Number,
    warning: String
  }]
})

module.export = FoodSchema
