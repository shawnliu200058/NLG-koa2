const service = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const userInfo = await service.getUserByOpenid(openid)

    // 初次登录
    if (!userInfo) {
      // 创建用户
      const result = await service.create(userInfo, openid)
      ctx.body = result
    }
    ctx.body = {}
  }
}

module.exports = new UserController() 
