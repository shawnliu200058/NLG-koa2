const Router = require('@koa/router')

const { setCollectStatus, getList } = require('../controller/collect.controller')

const collectRouter = new Router({ prefix: '/collect' })

// 更新收藏商品状态
collectRouter.post('/update', setCollectStatus)
// 获取用户收藏列表
collectRouter.get('/list', getList)

module.exports = collectRouter
