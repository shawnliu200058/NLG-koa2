const service = require('../service/user.service')

class UserMiddleware {
  async verifyUser(ctx, next) {
    const {userInfo, openid} = ctx.req

    const result = service.getUserByOpenid
  }
}