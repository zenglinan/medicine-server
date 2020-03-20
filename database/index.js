const SellerSchema = require('./model/seller')
const FoodSchema = require('./model/seller')
const mongoose = require('mongoose')

const medicine = mongoose.model('medicine', FoodSchema)
const sellers = mongoose.model('sellers', SellerSchema)

exports.getAllFoods = async () => {
  return await medicine.find()
}
exports.getAllSellers = async () => {
  return await sellers.find()
}