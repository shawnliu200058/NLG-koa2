const service = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await service.create(name)
    ctx.body = result
  }

  as
}
 
module.exports = new CategoryController()
