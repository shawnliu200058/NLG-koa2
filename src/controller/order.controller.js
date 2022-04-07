const service = require('../service/order.service')

class OrderController {
  async create(ctx) {
    // console.log(ctx.request.body)
    const result = await service.create(ctx.request.body)
    ctx.body = result
  }

  async getOrderInfo(ctx) {
    const { userId } = ctx.request.body
    // console.log(userId)
    if (userId) {
      const result = await service.getById(userId)
      ctx.body = result
    } else {
      const result = await service.get()
      ctx.body = result
    }
  }

  async delOrderInfo(ctx) {
    const { id } = ctx.request.params
    const result = await service.delete(id)
    ctx.body = result
  }
}

module.exports = new OrderController()
