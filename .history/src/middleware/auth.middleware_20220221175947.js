const adminService = require('../service/admin.service')
const errorTypes = require('../constants/error-types')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      if (error !== undefined) ctx.body = error.details.message

      // 判断管理员是否存在的
      const result = await adminService.getAdminByName(name)
      const admin = 
      if (!result.length) {
        const error = new Error(errorTypes.ADMIN_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
      }

      // 4.判断密码是否和数据库中的密码是一致(加密)
      // if (md5password(password) !== user.password) {
      //   const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
      //   return ctx.app.emit('error', error, ctx)
      // }

      ctx.admin = 
      await next()
    }
  }
}

module.exports = new AuthMiddleware()
