const Router = require('@koa/router')

const { getDetailPicByGoodId, getDetailPicByName } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 获取该商品下所有详情图
goodRouter.get('/:goodId/detail_pic')
// 获取该商品下单个详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByName)

module.exports = goodRouter
