const promisePool = require('../app/database')

class FileService {
  async createCategoryIcon(filename, mimetype, categoryId) {
    const statement = `INSERT INTO category_icon (filename, mimetype, category_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      categoryId
    ])
    return result
  }

  async getCategoryIconById(categoryId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`
    const [result] = await connection.execute(statement, [userId])
    return result.pop()
  }
}

module.exports = new FileService()
