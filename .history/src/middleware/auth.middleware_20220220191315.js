const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const {name, password} = ctx.request.body

      // 验证用户名或密码sho'f
    }
  }
}

module.exports = new AuthMiddleware()
