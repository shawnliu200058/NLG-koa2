const service = require('../service/category.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const resul
    ctx.body = name
  }
}

module.exports = new CategoryController()
