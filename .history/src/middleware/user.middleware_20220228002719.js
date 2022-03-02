const service = require('../service/user.service')

class UserMiddleware {
  // async verifyUser(ctx, next) {
  //   const { userInfo, openid } = ctx.request.body

  //   // 验证用户是否初次登录
  //   const isExist = await service.getUserByOpenid(openid)
  //   console.log(isExist);
  //   // 初次登录
  //   // if(!isExist.length) {
  //   //   // 创建用户
  //   //   await service.create(userInfo, openid)
  //   // }

  //   await next()
  // }

  async verifyUser(schema) {
    return function validator(ctx, next) {
      const { name, password } = ctx.request.body

    // 验证用户名或密码是否为空
    const { error } = schema.validate(ctx.request.body)
    if (typeof error != 'undefined') {
      return ctx.body = error.message
    }

    // 验证用户名是否重复
    const result = await service.getUserByName(name)
    if (result.length) {
      const error = new Error(errorTypes.USER_ALREADY_EXISTS)
      return ctx.app.emit('error', error, ctx)
    }

    // 对密码进行加密
    ctx.request.body.password = md5Pwd(password)

    await next()
    }
  }
}
