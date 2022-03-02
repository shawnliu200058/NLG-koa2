const jwt = require('jsonwebtoken')

class AuthController {
  async login(ctx) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    ctx.body = { id, name, token }
  }
}

module.exports = new AuthController()