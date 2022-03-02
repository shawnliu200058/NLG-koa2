const adminService = require('../service/admin.service')
const

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      if (error !== undefined) ctx.body = error.details.message

      // 判断管理员是否存在的
      const result = await adminService.getAdminByName(name)
      console.log(result.length)
      if (!result.length) {
        const errora = new Error(errorTypes.ADMIN_DOES_NOT_EXISTS)
        console.log(errora);
        return ctx.app.emit('error', errora, ctx)
      }

      await next()
    }
  }
}

module.exports = new AuthMiddleware()
