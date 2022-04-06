const Router = require('@koa/router')

const {
  create,
  getOrderInfo,
  delOrderInfo
} = require('../controller/order.controller')

const orderRouter = new Router({ prefix: '/order' })

// 用户提交订单
orderRouter.post('/add', create)
// 获取用户订单信息
orderRouter.post('/list', getOrderInfo)
// 删除用户订单
orderRouter.delete('/delete/:id', delOrderInfo)

module.exports = orderRouter
