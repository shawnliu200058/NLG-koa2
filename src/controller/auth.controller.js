const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')

const userService = require('../service/user.service')

class AuthController {
  async login(ctx) {
    let id = null,
      name = null

    if (ctx.user) {
      id = ctx.user.id
      name = ctx.user.nickName
    } else {
      id = ctx.admin.id
      name = ctx.admin.name
    }

    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    const result = await userService.getUserById(id)
    result.token = token

    ctx.body = result
  }
}

module.exports = new AuthController()
