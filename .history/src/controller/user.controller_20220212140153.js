const service = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const isExist = await service.getUserByOpenid(openid).length
    // console.log(isExist);
    // // 初次登录
    // if (!isExist) {
    //   // 创建用户
    //   const result = await service.create(userInfo, openid)
    //   ctx.body = result
    // }
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()
