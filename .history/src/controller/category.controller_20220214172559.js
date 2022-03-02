class CategoryController {
  async create(ctx) {
    const name = ctx.request.body.name
    console.log(name);
    ctx.body = name
  }
}

module.exports = new CategoryController()