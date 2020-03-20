const router = require('koa-router')()
const { getAllFoods, getAllSellers } = require('../database/index')


router.get('/goods', async (ctx, next) => {
  await getAllFoods().then(res => {
    ctx.response.body = res;
  })
})

router.get('/seller', async (ctx, next) => {
  await getAllSellers().then(res => {
    ctx.response.body = res[0]; // 第一个店家
  })
})
module.exports = router
