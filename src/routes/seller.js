const Router = require('koa-router')
const sellerController = require('../controller/seller')

const router = new Router()
router.prefix('/seller')

router.get('/', sellerController.getSeller)

module.exports = router
