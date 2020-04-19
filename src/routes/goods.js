const Router = require('koa-router')
const goodsController = require('../controller/goods')

const router = new Router()
router.prefix('/goods')

router.get('/', goodsController.getGoods)

router.post('/', goodsController.modifyGoods)

module.exports = router
