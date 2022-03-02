

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    console.log(name)
    ctx.body = name
  }
}

module.exports = new CategoryController()
