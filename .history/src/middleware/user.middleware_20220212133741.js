const service = require('../service/user.service')

class UserMiddleware {
  async verifyUser(ctx, next) {
    const {userInfo, openid} = ctx.request.body

    const result = service.getUserByOpenid(openid)
  }
}