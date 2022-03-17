const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')

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

    ctx.body = { id, name, token }
  }
}

module.exports = new AuthController()
