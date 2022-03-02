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
      address
    } = goodForm
    const statement = 
      `INSERT INTO good (name, category_id, detail, price, unit, specification, stock, address)
VALUES ('桃子', 3, '详情', 10, '计量单位', '规格', 11, '发货地址')`
  }

  async getGoodList() {
    const statement = `SELECT good.id, good.name, good.displayPicUrl,
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = detail_pic.good_id
      GROUP BY good.id`

    const [result] = await promisePool.execute(statement)
    console.log(result)
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
}

module.exports = new GoodService()
