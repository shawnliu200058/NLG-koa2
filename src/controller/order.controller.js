const service = require('../service/order.service')

class OrderController {
  async create(ctx) {
    const result = await service.create(ctx.request.body)
    ctx.body = result
  }
}

module.exports = new OrderController()