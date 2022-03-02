const Router = require('@koa/router')

const { create, getGoodList, getDisplayPicByGoodId, getDetailPicByGoodId } = require('../controller/good.controller')

const goodRouter = new Router({ prefix: '/good' })

// 创建商品
goodRouter.post('/create')
// 获取所有商品信息
goodRouter.get('/:goodId', getGoodList)
// 获取该商品下展示图
goodRouter.get('/:goodId/display_pic', getDisplayPicByGoodId)
// 获取该商品下详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)

module.exports = goodRouter
