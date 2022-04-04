const Router = require('@koa/router')

const {
  create,
  getList,
  getIcon,
  updateCategoryInfo,
  delCategory
} = require('../controller/category.controller')

const { delOldFile } = require('../middleware/file.middleware')

const categoryRouter = new Router({ prefix: '/category' })

// 添加分类
categoryRouter.post('/', create)
// 获取分类列表
categoryRouter.post('/list', getList)
// 获取分类图标
categoryRouter.get('/:categoryId/:filename', getIcon)
// 更新分类信息
categoryRouter.patch('/:id', updateCategoryInfo)
// 删除分类信息
categoryRouter.delete('/:categoryId', delOldFile, delCategory)

module.exports = categoryRouter
