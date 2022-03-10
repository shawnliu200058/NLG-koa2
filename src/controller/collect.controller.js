const service = require('../service/collect.service')

class CollectController {
  async setCollectStatus(ctx) {
   const result = await service.update(ctx.request.body)
    ctx.body = result
  }

  async getList(ctx) {
    // 根据 id 获取用户收藏列表
    const { user_id } = ctx.request.query

    if (user_id) {
      const result = await service.getById(user_id)
      ctx.body = result
    }

    // 获取全部用户收藏列表
    else {
      const result = await service.get()
      ctx.body = result
    }
  }
}

module.exports = new CollectController()