const Router = require('@koa/router')

const {getDetailPic} = require('../controller/')

const goodRouter = new Router({prefix: '/good'})

goodRouter.get('/:goodId/detail_pic')

module.exports = goodRouter