const Router = require('@koa/router')

const { getDetailPicByGoodId } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 获取该商品下所有详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)

goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)

module.exports = goodRouter
