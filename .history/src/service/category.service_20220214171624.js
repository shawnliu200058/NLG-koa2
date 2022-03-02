const promisePool = require('../app/database')

class CategoryService {

  
  async updateIconById(iconUrl, categoryId) {
    const statement = `UPDATE category SET icon_url = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [iconUrl, categoryId])
    return result
  }
}

module.exports = new CategoryService()