const service = require('../service/user.service')

class UserMiddleware {
  async verifyUser(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const isExist = await service.getUserByOpenid(openid)
    console.log(isExist);
    // 初次登录
    // if(!isExist.length) {
    //   // 创建用户
    //   await service.create(userInfo, openid)
    // }

    await next()
  }
}
