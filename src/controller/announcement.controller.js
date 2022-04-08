class AnnouncementController {
  async create(ctx) {
    console.log(ctx.request.body)
  }

  async getContent(ctx) {}
}

module.exports = new AnnouncementController()
