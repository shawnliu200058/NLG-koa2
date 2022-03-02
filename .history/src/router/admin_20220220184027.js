const Router = require('@koa/router')

const { create, getIcon } = require('../controller/category.controller')

const adminRouter = new Router({ prefix: '/admin' })

// 添加分类
adminRouter.post('/', create)
// 获取分类图标
categoryRouter.get('/:categoryId/icon', getIcon)

module.exports = categoryRouter