const Router = require('@koa/router')

const {create} = require('../controller/category.controller')

const categoryRouter = new Router({ prefix: '/category' })

// 添加分类
categoryRouter.post('/', create)
// 获取分类图标
categoryRouter.get('/:categoryId/icon')

module.exports = categoryRouter