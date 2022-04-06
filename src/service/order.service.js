const promisePool = require('../app/database')

const publicService = require('./public/public.service')

class OrderService {
  async create(info) {
    const { deliveryAddress, goodList, remark, totalPrice } = info
    const { address, house, phone, realName, user_id } = deliveryAddress

    const goodListToStr = JSON.stringify(goodList)

    const statement = `INSERT INTO my_order 
      (good_info, total_price, real_name, delivery_address, phone, house, remark, user_id) 
			VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    const [result] = await promisePool.execute(statement, [
      goodListToStr,
      totalPrice,
      realName,
      address,
      phone,
      house,
      remark,
      user_id
    ])

    return result
  }

  async get() {
    const statement = `SELECT * FROM my_order`
    const [list] = await promisePool.execute(statement)

    const totalCount = await publicService.getListCount('my_order')
    // console.log(totalCount)
    return { orderList: { totalCount, list } }
  }

  async getById(userId) {
    const statement = `SELECT * FROM my_order WHERE user_id = ?`
    const [list] = await promisePool.execute(statement, [userId])

    const totalCount = await publicService.getListCountById(
      'my_order',
      'user_id',
      userId
    )
    // console.log(totalCount)
    return { orderList: { totalCount, list } }
  }

  async delete(orderId) {
    const statement = `DELETE FROM my_order WHERE id = ?`
    const [result] = await promisePool.execute(statement, [orderId])
    return result
  }
}

module.exports = new OrderService()
