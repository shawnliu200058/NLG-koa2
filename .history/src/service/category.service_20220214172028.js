const promisePool = require('../app/database')

class CategoryService {
async create(name) {
  const statement = `INSERT INTO category (name) VALUES (?)`
  const [result] = await promisePool.execute
}

  async updateIconById(iconUrl, categoryId) {
    const statement = `UPDATE category SET icon_url = ? WHERE id = ?;`
    const [result] = await promisePool.execute(statement, [iconUrl, categoryId])
    return result
  }
}

module.exports = new CategoryService()