const service = require('../service/order.service')

class OrderController {
  async create(ctx) {
    const result = await service.create(ctx.request.body)
    ctx.body = result
  }

  async getOrderInfo(ctx) {
    const { userId } = ctx.request.query
    // console.log(userId)
    const result = await service.get(userId)
    ctx.body = result
  }

  async delOrderInfo(ctx) {
    const { id } = ctx.request.params
    const result = await service.delete(id)
    ctx.body = result
  }
}

module.exports = new OrderController()