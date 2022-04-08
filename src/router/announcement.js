const Router = require('@koa/router')

const { create } = require('../controller/announcement.controller')

const announcementRouter = new Router({ prefix: '/announcement' })

announcementRouter.post('/', create)

module.exports = announcementRouter
