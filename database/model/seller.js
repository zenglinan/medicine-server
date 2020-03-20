const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.export = SellerSchema