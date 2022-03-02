const service = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const re
    ctx.body = name
  }
}

module.exports = new CategoryController()
