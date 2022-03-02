const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')

class AuthController {
  async login(ctx) {
    const { id, name } = ctx.admin
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    ctx.body = { data: { id, name, token } }
  }
}

module.exports = new AuthController()
