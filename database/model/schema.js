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

const SellerSchema = new Schema({
    name: String,
    description: String,
    deliveryTime: Number,
    score: Number,
    serviceScore: Number,
    foodScore: Number,
    rankRate: Number,
    minPrice: Number,
    deliveryPrice: Number,
    ratingCount: Number,
    sellCount: Number,
    bulletin: String,
    supports: [
      {
        type: Number,
        description: String
      },
      {
        type: Number,
        description: String
      }
    ],
    avatar: String,
    pics: Array,
    infos: Array
})

module.export = {
  FoodSchema,
  SellerSchema
}