const service = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const isExistUser = await service.getUserByOpenid(openid)

    // 初次登录
    if (!isExistUser) {
      // 创建用户
      const result = await service.create(userInfo, openid)
      ctx.body = result
    }
    ctx.body = { msg: '登录成功', user }
  }
}

module.exports = new UserController()
