const jwt = require('jsonwebtoken')

const adminService = require('../service/admin.service')
const errorTypes = require('../constants/error-types')
const md5password = require('../utils/password-handler')
const { PUBLIC_KEY } = require('../app/config')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      const { name, password } = ctx.request.body

      // 验证用户名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      if (error !== undefined) ctx.body = error.details.message

      // 判断管理员是否存在的
      const result = await adminService.getAdminByName(name)
      if (!result.length) {
        const error = new Error(errorTypes.ADMIN_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
      }

      // 4.判断密码是否和数据库中的密码是一致(加密)
      const admin = result[0]
      if (md5password(password) !== admin.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
        return ctx.app.emit('error', error, ctx)
      }

      ctx.admin = admin
      await next()
    }
  }

  async verifyAuth(ctx, next) {
    console.log('验证授权的中间件')
    const { authorization } = ctx.headers
    if (!authorization) {
      const error = new Error(errorTypes.UNAUTHORIZED)
      return ctx.app.emit('error', error, ctx)
    }
    const token = authorization.replace('Bearer ', '')

    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
      })
      ctx.admin = result
      await next()
    } catch (err) {
      const error = new Error(errorTypes.UNAUTHORIZED)
      ctx.app.emit('error', error, ctx)
    }
  }
}

module.exports = new AuthMiddleware()
