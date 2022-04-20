const jwt = require('jsonwebtoken')

const userService = require('../service/user.service')
const adminService = require('../service/admin.service')
const errorTypes = require('../constants/error-types')
const md5password = require('../utils/password-handler')
const { PUBLIC_KEY } = require('../app/config')

class AuthMiddleware {
  verifyLogin(schema) {
    return async function validator(ctx, next) {
      // console.log(ctx.request.url.includes('user'))
      // console.log(ctx.request.body)
      const { name, password } = ctx.request.body

      // 验证账号名或密码是否为空
      const { error } = schema.validate(ctx.request.body)
      if (error !== undefined) ctx.body = error.details.message

      if (ctx.request.url.includes('user')) {
        // 判断用户名是否存在的
        const result = await userService.getUserByName(name)
        // console.log(result)
        if (!result.length) {
          const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
          return ctx.app.emit('error', error, ctx)
        }
        // 4.判断密码是否和数据库中的密码是一致(加密)
        const user = result[0]
        // console.log(md5password(password), user.password)
        if (md5password(password) !== user.password) {
          const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
          return ctx.app.emit('error', error, ctx)
        }
        // console.log(user)
        ctx.user = user
      } else {
        // 判断管理员是否存在的
        const result = await adminService.getAdminByName(name)
        if (!result.length) {
          const error = new Error(errorTypes.ADMIN_DOES_NOT_EXISTS)
          return ctx.app.emit('error', error, ctx)
        }
        // 4.判断密码是否和数据库中的密码是一致(加密)
        const admin = result[0]
        // console.log(admin.password === md5password(password))
        if (md5password(password) !== admin.password) {
          const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
          return ctx.app.emit('error', error, ctx)
        }
        ctx.admin = admin
      }

      await next()
    }
  }

  async verifyPwd(ctx, next) {
    const { id } = ctx.params
    const { originalPwd, newPwd } = ctx.request.body
    // console.log(ctx.request.body)

    if (ctx.request.url.includes('user')) {
      // 判断用户名是否存在的
      const result = await userService.getUserById(id)
      // console.log(result)
      // 4.判断密码是否和数据库中的密码是一致(加密)
      if (md5password(originalPwd) !== result.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
        return ctx.app.emit('error', error, ctx)
      }
      ctx.modifyInfo = { id, newPwd: md5password(newPwd) }
      await next()
    }
  }

  async verifyAuth(ctx, next) {
    const { authorization } = ctx.headers
    // console.log(authorization)

    if (!authorization) {
      const error = new Error(errorTypes.UNAUTHORIZED)
      return ctx.app.emit('error', error, ctx)
    }
    const token = authorization.replace('Bearer ', '')

    // console.log(token)

    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
      })
      ctx.admin = result
      await next()
    } catch (err) {
      console.log(err)
      const error = new Error(errorTypes.UNAUTHORIZED)
      ctx.app.emit('error', error, ctx)
    }
    // const result = jwt.verify(token, PUBLIC_KEY, {
    //   algorithms: ['RS256']
    // })
    // if (typeof result === 'object') {
    //   ctx.admin = result
    //   await next()
    // } else {
    //   const error = new Error(errorTypes.UNAUTHORIZED)
    //   ctx.app.emit('error', error, ctx)
    // }
  }
}

module.exports = new AuthMiddleware()
