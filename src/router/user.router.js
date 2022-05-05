const Router = require('@koa/router')

const {
  verifyLogin,
  verifyAuth,
  verifyPwd
} = require('../middleware/auth.middleware')
const { verifyUser } = require('../middleware/user.middleware')
const {
  create,
  addDeliverAddress,
  getDeliveryAddress,
  modifyDeliveryAddress,
  delDeliveryAddress,
  getUserList,
  getUserByKeyword,
  updateUserInfo,
  changeUserPwd,
  retriveInfo,
  getAvatar,
  delUserInfo
} = require('../controller/user.controller')
const { login } = require('../controller/auth.controller')

const { reg_login_schema } = require('../schema/admin.schema')

const userRouter = new Router({ prefix: '/user' })

// 用户注册
userRouter.post('/register', verifyUser(reg_login_schema), create)
// 用户登录
userRouter.post('/login', verifyLogin(reg_login_schema), login)
// 新增用户收货地址
userRouter.post('/address/add', addDeliverAddress)
// 获取用户收获地址
userRouter.get('/address/:userId?', getDeliveryAddress)
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
// 删除用户
// userRouter.delete('/:id', delUserInfo)
// 重新获取用户信息
userRouter.get('/info/:id', retriveInfo)
// 修改密码
userRouter.patch('/pwd/:id', verifyPwd, changeUserPwd)
// 获取用户头像
userRouter.get('/:userId/avatar', getAvatar)

module.exports = userRouter
