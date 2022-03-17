const Router = require('@koa/router')

const { getList } = require('../controller/carousel.controller')

const carouselRouter = new Router({ prefix: '/carousel' })

carouselRouter.post('/list', getList)

module.exports = carouselRouter
