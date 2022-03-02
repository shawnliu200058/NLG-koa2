const Router = require('@koa/router')

const create = require('../')

const userRouter = new Router({ prefix: '/users' })

// 小程序用户授权登录，将用户信息存入数据库
userRouter.post('/login', create)