const Router = require('@koa/router')

const {
  create,
  getGoodList,
  getDisplayPicByGoodId,
  getDetailPicByGoodId,
  getGoodByKeyword,
  getPublish,
  updatePublish,
  delPublish,
  modifyStatus,
  updateAudit
} = require('../controller/good.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { delGoodPic } = require('../middleware/file.middleware')

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
// 获取用户发布
goodRouter.post('/getPublish', getPublish)
// 删除用户发布
goodRouter.delete('/delPublish/:goodId', delGoodPic, delPublish)
// 更新用户发布
goodRouter.patch('/updatePublish/:goodId', updatePublish)
// 更新商品状态
goodRouter.patch('/status/:goodId', modifyStatus)
// 更新商品审核状态
goodRouter.patch('/audit/:goodId', updateAudit)

module.exports = goodRouter
