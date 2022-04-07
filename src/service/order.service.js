const promisePool = require('../app/database')

const publicService = require('./public/public.service')
const userSercice = require('./user.service')

const snowId = require('simple-flakeid')

class OrderService {
  async create(info) {
    const { deliveryAddress, goodList, remark, totalPrice } = info
    const { address, house, phone, realName, user_id } = deliveryAddress

    let gen1 = new snowId.SnowflakeIdv1({ workerId: 1 })
    // 生成订单编号
    const orderID = gen1.NextId()
    // console.log(`ID:${id1} ${typeof id1} length：${id1.toString().length}`)

    const goodListToStr = JSON.stringify(goodList)

    const statement = `INSERT INTO my_order 
      (orderID, good_info, total_price, real_name, delivery_address, phone, house, remark, user_id)
    	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    const [result] = await promisePool.execute(statement, [
      orderID,
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

    list.forEach(async (item, index) => {
      const result = await userSercice.getUserById(item.user_id)
      list[index].userName = result.nickName
    })

    const totalCount = await publicService.getListCount('my_order')
    // console.log(totalCount)
    return { orderList: { totalCount, list } }
  }

  async getById(userId) {
    const statement = `SELECT * FROM my_order WHERE user_id = ?`
    const [list] = await promisePool.execute(statement, [userId])

    list.forEach(async (item, index) => {
      const result = await userSercice.getUserById(item.user_id)
      list[index].userName = result.nickName
    })

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
