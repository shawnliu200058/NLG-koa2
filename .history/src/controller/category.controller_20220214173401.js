const service = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const res
    ctx.body = name
  }
}

module.exports = new CategoryController()
