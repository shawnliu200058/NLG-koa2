const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const {name, password} = ctx.request.body

      // 
    }
  }
}

module.exports = new AuthMiddleware()
