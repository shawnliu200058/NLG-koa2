const Router = require('@koa/router')

const { verifyAuth } = require('../middleware/auth.middleware')

const {
  create,
  addDeliverAddress,
  getDeliveryAddress,
  modifyDeliveryAddress,
  delDeliveryAddress,
  getUserList,
  getUserByKeyword,
  updateUserInfo
} = require('../controller/user.controller')

const userRouter = new Router({ prefix: '/user' })

// 小程序用户授权登录，将用户信息存入数据库
userRouter.post('/login', create)
// 新增用户收货地址
userRouter.post('/address/add', addDeliverAddress)
// 获取用户收获地址
userRouter.get('/address', getDeliveryAddress)
// 修改用户收货地址
userRouter.put('/address/modify/:id', modifyDeliveryAddress)
// 删除用户收货地址
userRouter.delete('/address/delete/:id', delDeliveryAddress)
// 获取所有用户信息
userRouter.post('/list', verifyAuth, getUserList)
// 模糊查询用户信息
userRouter.post('/query', verifyAuth, getUserByKeyword)
// 更新用户信息
userRouter.patch('/:id', updateUserInfo)

module.exports = userRouter
