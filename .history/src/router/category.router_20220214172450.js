const Router = require('@koa/router')

const {} = require('../controller/')

const categoryRouter = new Router({ prefix: '/category' })

// 添加分类
categoryRouter.post('/')
// 获取分类图标
categoryRouter.get('/:categoryId/icon')

module.exports = categoryRouter