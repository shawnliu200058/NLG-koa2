const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  // console.log(error)

  switch (error.message) {
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409 // conflict
      message = '用户已经存在~'
      break
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400 // 参数错误
      message = '用户不存在~'
      break
    case errorTypes.ADMIN_ALREADY_EXISTS:
      status = 409 // conflict
      message = '管理员已经存在~'
      break
    case errorTypes.ADMIN_DOES_NOT_EXISTS:
      status = 400 // 参数错误
      message = '管理员不存在~'
      break
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400 // 参数错误
      message = '密码是错误的~'
      break
    case errorTypes.UNAUTHORIZED:
      status = 401 // 参数错误
      message = '无效的token~'
      break
    case errorTypes.UNPERMISSION:
      status = 401 // 参数错误
      message = '您不具备操作的权限~'
      break
    default:
      status = 404
      message = 'NOT FOUND'
  }
  ctx.status = 200
  ctx.body = { errMsg: message }
}

module.exports = errorHandler
