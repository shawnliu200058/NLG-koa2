const promisePool = require('../app/database')

class GoodService {
  async create(goodForm) {
    const {
      name,
      categoryId,
      detail,
      price,
      unit,
      specification,
      stock,
      address,
      userId
    } = goodForm
    const statement = `INSERT INTO good (name, category_id, detail, price, unit, specification, stock, good_address, user_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    const result = await promisePool.execute(statement, [
      name,
      categoryId,
      detail,
      price,
      unit,
      specification,
      stock,
      address,
      userId
    ])

    return result
  }

  async getGoodList(queryInfo) {
    const { offset, limit } = queryInfo
    const statement = `SELECT good.id, good.name, good.detail, good.price, good.unit, good.specification, 
        good.sale, good.stock, good.good_address, good.displayPicUrl, good.collect_userId,
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = detail_pic.good_id
      GROUP BY good.id LIMIT ? OFFSET ?`

    const [result] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])
    return result
  }

  async updateGoodById(displayPicUrl, goodId) {
    const statement = `UPDATE good SET displayPicUrl = ? WHERE id = ?;`
    const [result] = await promisePool.execute(statement, [
      displayPicUrl,
      goodId
    ])
    return result
  }

  async getGoodsByKeyword(keyword) {
    const statement = `SELECT * FROM good WHERE name LIKE ?`
    const [result] = await promisePool.execute(statement, [`%${keyword}%`])
    return result
  }
}

module.exports = new GoodService()
