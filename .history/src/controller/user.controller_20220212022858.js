class UserController {
  async create(ctx, next) {
    // const { userInfo, openid } = ctx.request.body
    // console.log(userInfo, openid)

    console.log(ctx.request.body)

    ctx.body = ctx.request.body 
  }
}

module.exports = new UserController()
