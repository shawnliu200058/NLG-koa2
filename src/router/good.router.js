const Router = require('@koa/router')

const {
  create,
  getGoodList,
  getDisplayPicByGoodId,
  getDetailPicByGoodId,
  getGoodByKeyword
} = require('../controller/good.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const goodRouter = new Router({ prefix: '/good' })

// 创建商品
goodRouter.post('/create', create)
// 获取所有商品信息
goodRouter.post('/list', getGoodList)
// 获取该商品下展示图
goodRouter.get('/:goodId/display_pic', getDisplayPicByGoodId)
// 获取该商品下详情图
goodRouter.get('/:goodId/detail_pic', getDetailPicByGoodId)
// 模糊查询
goodRouter.get('/query', getGoodByKeyword)

module.exports = goodRouter
