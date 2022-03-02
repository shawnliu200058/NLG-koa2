const Router = require('@koa/router')

const goodRouter = new Router({prefix: '/good'})

goodRouter.get('/detailPic')

module.exports = goodRouter