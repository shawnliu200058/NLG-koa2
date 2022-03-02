const Router = require('@koa/router')

const userRouter = new Router({ prefix: '/users' })

// 小程序用户授权登录，将
userRouter.post('/login', create)