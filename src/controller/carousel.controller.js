const service = require('../service/carousel.service')

class CarouselController {
  async getList(ctx) {
    // console.log(ctx.request.body)
    const result = await service.get(ctx.request.body)
    ctx.body = result
  }
}

module.exports = new CarouselController()
