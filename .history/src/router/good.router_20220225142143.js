const Router = require('@koa/router')

const { getDetailPicList } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 获取商品详情图列表
goodRouter.get('/:goodId/detail_pic', getDetailPicList)

module.exports = goodRouter
