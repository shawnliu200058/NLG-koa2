const Router = require('@koa/router')

const { create, addDeliverAddress, getDeliveryAddress } = require('../controller/user.controller')

const userRouter = new Router({ prefix: '/user' })

// 小程序用户授权登录，将用户信息存入数据库
userRouter.post('/login', create)
// 新增用户收货地址
userRouter.post('/address', addDeliverAddress)
// 获取用户收获地址
userRouter.get('/address', getDeliveryAddress)

module.exports = userRouter
