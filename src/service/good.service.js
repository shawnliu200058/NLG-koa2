const { off } = require('../app/database')
const promisePool = require('../app/database')

const publicService = require('./public/public.service')

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
        good.sale, good.stock, good.good_address, good.displayPicUrl, good.category_id,
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = detail_pic.good_id
      GROUP BY good.id LIMIT ? OFFSET ?`

    const [list] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])

    const totalCount = await publicService.getListCount('good')
    // console.log(totalCount)
    return { goodList: { totalCount, list } }
  }

  async getGoodListById(queryInfo, categoryId) {
    // console.log(categoryId)
    const { offset, limit } = queryInfo
    const statement = `SELECT good.id, good.name, good.detail, good.price, good.unit, good.specification, 
        good.sale, good.stock, good.good_address, good.displayPicUrl, good.category_id,
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = detail_pic.good_id WHERE category_id = ?
      GROUP BY good.id LIMIT ? OFFSET ?`

    const [list] = await promisePool.execute(statement, [
      categoryId,
      `${limit}`,
      `${offset}`
    ])
    const totalCount = await publicService.getListCountById(
      'good',
      'category_id',
      categoryId
    )

    return { goodList: { totalCount, list } }
  }

  async getGoodsCount() {
    const statement = `SELECT COUNT(*) totalCount FROM good`
    const [result] = await promisePool.execute(statement)
    return result.pop()
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

  async getPublish(userId, queryInfo) {
    const { offset, limit } = queryInfo
    // const statement = `SELECT * FROM good WHERE user_id = ? LIMIT ? OFFSET ?`
    const statement = `SELECT good.id, good.name, good.detail, good.price, good.unit, good.specification, 
        good.sale, good.stock, good.good_address, good.displayPicUrl, good.category_id,
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = detail_pic.good_id WHERE user_id = ?
      GROUP BY good.id LIMIT ? OFFSET ?`
    const [list] = await promisePool.execute(statement, [
      userId,
      `${limit}`,
      `${offset}`
    ])
    // console.log(list)
    const totalCount = await publicService.getListCountById(
      'good',
      'user_id',
      userId
    )
    return { publishList: { totalCount, list } }
  }

  async delPublish(goodId) {
    const statement = `DELETE FROM good WHERE id = ?`
    const [result] = await promisePool.execute(statement, [goodId])
    return result
  }

  async updatePublish(formData, goodId) {
    // console.log(formData)
    const {
      name,
      categoryId,
      detail,
      price,
      unit,
      stock,
      specification,
      address
    } = formData
    const statement = `UPDATE good SET name = ?, category_id = ?, detail = ?, price = ?, 
       unit = ?, specification = ?, stock = ?, good_address = ? WHERE id = ?`

    const [result] = await promisePool.execute(statement, [
      name,
      categoryId,
      detail,
      price,
      unit,
      specification,
      stock,
      address,
      goodId
    ])
    return result
  }
}

module.exports = new GoodService()
