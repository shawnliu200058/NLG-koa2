const Router = require('@koa/router')

const { create } = require('../controller/order.controller')

const orderRouter = new Router({ prefix: '/order' })

// 用户提交订单
orderRouter.post('/add', create)


module.exports = orderRouter
