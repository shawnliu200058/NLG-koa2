const { ValidationError } = require('joi')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      ctx.body = err
    }
  }
}

module.exports = new AuthMiddleware()
