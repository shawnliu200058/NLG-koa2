const AlipayFormData = require('alipay-sdk/lib/form').default
const snowId = require('simple-flakeid')

const alipaySdk = require('../utils/alipayKeyTool/alipay')
const service = require('../service/order.service')

class OrderController {
  async create(ctx) {
    // console.log(ctx.request.body)
    let gen1 = new snowId.SnowflakeIdv1({ workerId: 1 })
    // 生成订单编号
    const orderID = gen1.NextId()
    // console.log(orderID)
    const formData = new AlipayFormData()
    // console.log(formData)
    formData.setMethod('get')
    formData.addField(
      'returnUrl',
      'http://localhost:8080/#/pages/paymentSucceeded/paymentSucceeded'
    )
    formData.addField('bizContent', {
      outTradeNo: orderID,
      productCode: 'FAST_INSTANT_TRADE_PAY',
      totalAmount: '0.01',
      subject: orderID,
      body: '商品详情'
    })
    // console.log(formData)
    const result = await alipaySdk.exec(
      'alipay.trade.wap.pay',
      {},
      { formData }
    )
    // console.log(result)
    // result.then((resp) => {
    //   console.log(resp)
    //   ctx.body = { resp }
    // })
    // console.log(result)
    ctx.body = { url: result }

    // const result = await service.create(ctx.request.body)
    // ctx.body = result
  }

  async getOrderInfo(ctx) {
    const { userId } = ctx.request.body
    // console.log(userId)
    if (userId) {
      const result = await service.getById(userId)
      ctx.body = result
    } else {
      const result = await service.get()
      ctx.body = result
    }
  }

  async delOrderInfo(ctx) {
    const { id } = ctx.request.params
    // console.log(id)
    const result = await service.delete(id)
    ctx.body = result
  }
}

module.exports = new OrderController()
