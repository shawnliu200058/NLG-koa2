const { ValidationError } = require("joi")

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const {name, password} = ctx.request.beforeDestroy() {
        
      },
    }
  }
}

module.exports = new AuthMiddleware()
