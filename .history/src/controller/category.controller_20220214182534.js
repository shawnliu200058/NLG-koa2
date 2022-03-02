const categoryService = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await categoryService.create(name)
    ctx.body = result
  }

  async getIcon(ctx) {
    const {categoryId} = ctx.params

  }
}
 
module.exports = new CategoryController()
