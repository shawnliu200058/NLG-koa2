const Router = require('@koa/router')

const {getDetailPic} = require('../controller/good.controller')

const goodRouter = new Router({prefix: '/good'})

goodRouter.get('/:goodId/detail_pic', getDetailPic)

module.exports = goodRouterw