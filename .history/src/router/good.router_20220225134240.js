const Router = require('@koa/router')

const {getDetailPic} = require('../')

const goodRouter = new Router({prefix: '/good'})

goodRouter.get('/:goodId/detail_pic')

module.exports = goodRouter