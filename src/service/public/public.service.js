const promisePool = require('../../app/database')

class PublicService {
  async getListCount(pageName) {
    // console.log(pageName)
    const statement = `SELECT COUNT(*) totalCount FROM ${pageName}`
    const [result] = await promisePool.execute(statement)
    return result
  }
}

module.exports = new PublicService()
