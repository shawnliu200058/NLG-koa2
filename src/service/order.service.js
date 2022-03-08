const promisePool = require('../app/database')

class OrderService {
  async create(info) {
    const { deliveryAddress, goodList, remark, totalPrice } = info
    const { address, house, phone, realName, user_id } = deliveryAddress

    const goodListToStr = JSON.stringify(goodList)
    // console.log(goodListToStr)

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
}

module.exports = new OrderService()
