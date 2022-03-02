const promisePool = require('../app/database')

class AdminService {
  async getAdminByName(name) {
    const statement = `SELECT * FROM admin WHERE name = ?`
    const result = await promisePool.execute()

    return result[0]
  }
}

module.exports = new AdminService()