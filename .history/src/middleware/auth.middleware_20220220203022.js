const { ValidationError } = require('joi')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      if(error.details !== undefined) ctx.body = error.details.message
    }
  }
}

module.exports = new AuthMiddleware()
