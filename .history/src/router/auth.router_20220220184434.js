const Router = require('@koa/router')

const { create } = require('../controller/user.controller')

const authRouter = new Router({ prefix: '/user' })

// 小程序用户授权登录，将用户信息存入数据库
authRouter.post('/login', create)

module.exports = userRouter
