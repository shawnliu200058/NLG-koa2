const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')

const userService = require('../service/user.service')
const adminService = require('../service/admin.service')

class AuthController {
  async login(ctx) {
    let id = null,
      name = null,
      result = null

    if (ctx.user) {
      id = ctx.user.id
      name = ctx.user.nickName
      result = await userService.getUserById(id)
    } else {
      id = ctx.admin.id
      name = ctx.admin.name
      result = await adminService.getAdminByName(name)
    }

    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    console.log(result)
    result.token = token

    ctx.body = result
  }
}

module.exports = new AuthController()
