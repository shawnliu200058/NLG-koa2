const promisePool = require('../app/database')

class AdminService {
  async getAdminByName(name) {
    const statement = `SELECT * FROM admin WHERE name = ?`
    const [result] = await promisePool.execute(statement, [name])

    return result
  }
}

module.exports = new AdminService()