

class AuthController {
  async login(ctx) {
    ctx.body = '登录成功'
  }
}

module.exports = new AuthController()