const { ValidationError } = require('joi')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      console.log(ValidationError)
      // const { error } = schema.validate(ctx.request.body)
      // if (error !== undefined) ctx.body = error.details.message

      // // 判断管理员是否存在的
      // const result = await userService.getUserByName(name)
      // const user = result[0]
      // if (!user) {
      //   const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
      //   return ctx.app.emit('error', error, ctx)
      // }

      await next()
    }
  }
}

module.exports = new AuthMiddleware()
