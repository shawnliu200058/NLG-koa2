const promisePool = require('../app/database')

class CategoryService {
  async updateIconById(iconUrl, categoryId) {
    const statement = `UPDATE category SET avatar_url = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [avatarUrl, userId])
    return result
  }
}