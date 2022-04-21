const fs = require('fs')

const userService = require('../service/user.service')
const addressService = require('../service/address.service')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/file-path')

class UserController {
  async create(ctx, next) {
    // const { userInfo, openid } = ctx.request.body
    // 验证用户是否初次登录
    // const isExistUser = await userService.getUserByOpenid(openid)
    // 初次登录
    // if (!isExistUser) {
    //   // 创建用户
    //   const result = await userService.create(userInfo, openid)
    //   ctx.body = result
    // }
    // ctx.body = { msg: '登录成功', user: isExistUser }

    // console.log(ctx.user)
    const result = await userService.create(ctx.user)
    ctx.body = result
  }

  // 创建用户收货地址
  async addDeliverAddress(ctx) {
    const addressInfo = ctx.request.body
    const { userId } = ctx.request.query
    const result = await addressService.create(addressInfo, userId)
    ctx.body = result
  }

  async getDeliveryAddress(ctx) {
    // console.log(ctx.request.params.userId)
    const result = await addressService.get(ctx.request.params.userId)
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

  async getUserList(ctx) {
    // console.log(ctx.request.body)
    const result = await userService.getList(ctx.request.body)
    // console.log(result)
    ctx.body = result
  }

  async getUserByKeyword(ctx) {
    const result = await userService.getUserByKeyword(ctx.request.body)
    ctx.body = result
  }

  async updateUserInfo(ctx) {
    const { id } = ctx.params
    const updateInfo = ctx.request.body
    // console.log(updateInfo.nickName)
    const result = await userService.updateInfo(id, updateInfo)
    ctx.body = result
  }

  async changeUserPwd(ctx) {
    const result = await userService.changePwd(ctx.modifyInfo)
    ctx.body = result
  }

  // 修改用户资料后需要重新向后端请求最新的信息
  async retriveInfo(ctx) {
    const { id } = ctx.params
    // console.log(ctx.params)
    const result = await userService.getUserById(id)
    ctx.body = result
  }

  async getAvatar(ctx) {
    // console.log(ctx.params)
    const { userId } = ctx.params
    const avatar = await fileService.getAvatarById(userId)
    // console.log(avatar)

    // 提供图像信息
    ctx.response.set('content-type', avatar.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatar.filename}`)
  }
}

module.exports = new UserController()
