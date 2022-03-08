class OrderController {
  async create(ctx) {
    ctx.body = 12
  }
}

module.exports = new OrderController()