const Router = require('@koa/router')

const categoryRouter = new Router({ prefix: '/category' })

categoryRouter.get()

module.exports = categoryRouter