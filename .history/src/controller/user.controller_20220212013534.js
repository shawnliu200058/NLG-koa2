class UserController {
  async create(ctx) {
    const { userInfo, openid } = ctx.request.body
    console.log(userInfo, openid)

    ctx.body = ctx.request.body
  }
}
