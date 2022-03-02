const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    return async ValidationError(ctx, next)
  }
}
