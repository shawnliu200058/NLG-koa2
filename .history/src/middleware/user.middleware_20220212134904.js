const service = require('../service/user.service')

class UserMiddleware {
  async verifyUser(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const is = await service.getUserByOpenid(openid)
    // 初次登录

  }
}
