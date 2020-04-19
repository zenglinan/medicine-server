const goodsRoute = require('./goods')
const sellerRoute = require('./seller')
const combine = require('koa-combine-routers')

module.exports = combine(
  goodsRoute,
  sellerRoute
)
