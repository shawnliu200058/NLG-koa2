const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    return async validator(ctx, next) {
      const {name, password} = ctx.request.body
    }
  }
}
