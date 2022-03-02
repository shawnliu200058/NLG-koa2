const Router = require('@koa/router')

const userRouter = new Router({ prefix: '/users' })

// 小程序
userRouter.post('/login')