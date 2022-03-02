const Router = require('@koa/router')

const { create } = require('../')
const { reg_login_schema } = require('../schema/admin.schema')

const authRouter = new Router({ prefix: '/user' })

// 小程序用户授权登录，将用户信息存入数据库
authRouter.post('/login', create)

module.exports = authRouter
