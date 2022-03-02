const promisePool = require('../app/database')

class AdminService {
  async getAdminByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const result = await connection.execute(statement, [name])

    return result[0]
  }
}

module.exports = new AdminService()