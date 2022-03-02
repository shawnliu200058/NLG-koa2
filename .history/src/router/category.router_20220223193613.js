const Router = require('@koa/router')

const { create, getIcon } = require('../controller/category.controller')

const categoryRouter = new Router({ prefix: '/category' })

// 添加分类
categoryRouter.post('/', create)
// 获取分类列表
categoryRouter.post('/list')

// 获取分类图标
categoryRouter.get('/:categoryId/icon', getIcon)

module.exports = categoryRouter
