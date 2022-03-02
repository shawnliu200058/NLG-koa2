const promisePool = require('../app/database')

class AdminService {
  async getAdminByName(name) {
    const { name, password } = user
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const result = await connection.execute(statement, [name, password])

    return result[0]
  }
}

module.exports = new AdminService()