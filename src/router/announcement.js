const Router = require('@koa/router')

const { create, getContent } = require('../controller/announcement.controller')

const announcementRouter = new Router({ prefix: '/announcement' })

// 保存通告
announcementRouter.post('/', create)
// 获取通告
announcementRouter.get('/', getContent)

module.exports = announcementRouter
