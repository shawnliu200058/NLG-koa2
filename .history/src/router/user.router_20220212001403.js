const Router = require('@koa/router')

const userRouter = new Router({ prefix: '/users' })

// 小程序用户shou
userRouter.post('/login')