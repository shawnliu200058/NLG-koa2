const Router = require('@koa/router')

const categoryRouter = new Router({ prefix: '/category' })


// 获取分类图标
categoryRouter.get('/:categoryId/icon')

module.exports = categoryRouter