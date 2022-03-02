const Router = require('@koa/router')

const categoryRouter = new Router({ prefix: '/category' })

categoryRouter.get('/:category')

module.exports = categoryRouter