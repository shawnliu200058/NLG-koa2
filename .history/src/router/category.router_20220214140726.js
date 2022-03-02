const Router = require('@koa/router')

const categoryRouter = new Router({ prefix: '/category' })

categoryRouter.get('/:categoryI')

module.exports = categoryRouter