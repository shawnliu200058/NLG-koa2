const service = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await service.create(name)
    ctx.body = result
  }

  async getIcon(ctx) {
    const 
  }
}
 
module.exports = new CategoryController()
