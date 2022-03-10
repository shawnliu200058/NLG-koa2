const promisePool = require('../app/database')

class CollectService {
  async update(body) {
    const { userId, goodId } = body
    const statement = `UPDATE good SET collect_userId = ? WHERE id = ?`
    const [result] = await promisePool.execute(statement, [userId, goodId])
    return result
  }

  async get() {
    const statement = `SELECT collect_userId, JSON_ARRAYAGG(JSON_OBJECT('id', good.id, 
      'name', good.name, 'detail', good.detail, 'price', good.price, 'unit', good.unit, 'specification', good.specification
      'sale', good.sale, 'stock', good.stock, 'displayPic', good.displayPicUrl)) collectGood
      FROM good WHERE collect_userId IS NOT NULL GROUP BY good.collect_userId`
      
      const [result] = await promisePool.execute(statement)
      return result
  }

  async getById(userId) {
    const statement = `SELECT collect_userId, 
      JSON_ARRAYAGG(JSON_OBJECT('id', good.id, 'name', good.name, 'detail', good.detail, 
      'price', good.price, 'unit', good.unit, 'specification', good.specification, 'sale', good.sale, 'stock', good.stock, 
      'displayPic', good.displayPicUrl)) collectGood
	    FROM good WHERE collect_userId = ? GROUP BY good.collect_userId`

    const [result] = await promisePool.execute(statement, [userId])
    return result[0] ? result.pop() : []
  }
}

module.exports = new CollectService()
