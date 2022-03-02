const Router = require('@koa/router')

const { getDetailPicByGoodId } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 获取该商品下详情图列表
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)

module.exports = goodRouter
