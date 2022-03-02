const Router = require('@koa/router')

const {verifyLogin} = require('../middleware/auth.middleware')

const adminRouter = new Router({ prefix: '/admin' })

// 小程序用户授权登录，将用户信息存入数据库
adminRouter.post('/login', verifyLogin(r))

module.exports = adminRouter
