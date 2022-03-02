class UserController {
  async create(ctx, nex) {
    const { userInfo, openid } = ctx.request.body
    console.log(userInfo, openid)

    ctx.body = ctx.request.body
  }
}

module.exports = new UserController()
