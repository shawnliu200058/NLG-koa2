const Router = require('@koa/router')

const { getDetailPicByGoodId } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 根据 id 获取商品信息
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)
// 获取该商品下详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)
// 获取该商品下单个详情图

module.exports = goodRouter
