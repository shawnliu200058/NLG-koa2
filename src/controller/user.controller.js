const userService = require('../service/user.service')
const addressService = require('../service/address.service')

class UserController {
  async create(ctx, next) {
    const { userInfo, openid } = ctx.request.body

    // 验证用户是否初次登录
    const isExistUser = await userService.getUserByOpenid(openid)

    // 初次登录
    if (!isExistUser) {
      // 创建用户
      const result = await userService.create(userInfo, openid)
      ctx.body = result
    }
    ctx.body = { msg: '登录成功', user: isExistUser }
  }

  // 创建用户收货地址
  async addDeliverAddress(ctx) {
    const addressInfo = ctx.request.body
    const { userId } = ctx.request.query
    const result = await addressService.create(addressInfo, userId)
    ctx.body = result
  }

  async getDeliveryAddress(ctx) {
    const result = await addressService.get()
    ctx.body = result
  }

  async modifyDeliveryAddress(ctx) {
    // console.log(ctx.request.body)
    const addressInfo = ctx.request.body
    const { id } = ctx.request.params
    const result = await addressService.modify(addressInfo, id)
    ctx.body = result
  }

  async delDeliveryAddress(ctx) {
    const { id } = ctx.request.params
    const result = await addressService.delete(id)
    ctx.body = result
  }
}

module.exports = new UserController()
