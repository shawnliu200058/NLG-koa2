const Router = require('@koa/router')

const { getGoodById, getDetailPicByGoodId } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 获取所有商品信息
goodRouter.get('/:goodId', getGoodById)
// 获取该商品下详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)

module.exports = goodRouter
