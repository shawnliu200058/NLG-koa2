const service = require('../service/announcement.service')

class AnnouncementController {
  async create(ctx) {
    // console.log(ctx.request.body)
    const result = await service.create(ctx.request.body)
    ctx.body = result
  }

  async getContent(ctx) {
    const result = await service.get()
    ctx.body = result
  }
}

module.exports = new AnnouncementController()
