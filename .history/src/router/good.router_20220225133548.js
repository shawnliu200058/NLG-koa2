const Router = require('@koa/router')

const goodRouter = new Router({prefix: '/good'})

goodRouter.get('/')