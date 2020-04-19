const { getGoods, modifyGoods } = require('../../database/index')

class GoodsController {
  async getGoods(ctx) {
    await getGoods(ctx.db).then(res => {
      console.log(res);

      ctx.body = res
    })
  }
  async modifyGoods(ctx) {
    const res = await modifyGoods(ctx.db, ctx.request.body)
    ctx.body = 'ok'
  }
}
module.exports = new GoodsController()
