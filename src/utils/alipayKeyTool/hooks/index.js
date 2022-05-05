const AlipayFormData = require('alipay-sdk/lib/form').default

const alipaySdk = require('../alipay')

async function generatePaymentUrl(orderID, goodList) {
  // console.log(goodList)
  let totalAmount = 0
  goodList.forEach((item) => {
    totalAmount += item.price * item.count
  })

  const formData = new AlipayFormData()
  formData.setMethod('get')
  formData.addField(
    'returnUrl',
    'http://localhost:8081/#/pages/paymentSucceeded/paymentSucceeded'
  )
  // console.log(totalAmount)
  formData.addField('bizContent', {
    outTradeNo: orderID,
    productCode: 'FAST_INSTANT_TRADE_PAY',
    totalAmount: `${totalAmount.toFixed(2)}`,
    subject: orderID,
    body: '商品详情'
  })
  // console.log(formData)
  const result = await alipaySdk.exec('alipay.trade.wap.pay', {}, { formData })
  // console.log(result)
  return result
}

module.exports = { generatePaymentUrl }
