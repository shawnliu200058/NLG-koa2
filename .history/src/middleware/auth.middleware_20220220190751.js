const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    async validator(ctx, next) {
      const {name, password} = ctx.request.body
    }
  }
}
