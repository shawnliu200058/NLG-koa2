const promisePool = require('../../app/database')

class PublicService {
  async getListCount(tableName) {
    // console.log(pageName)
    const statement = `SELECT COUNT(*) totalCount FROM ${tableName}`
    const [result] = await promisePool.execute(statement)
    // console.log(result.pop().totalCount)
    return result.pop().totalCount
  }

  async getListCountById(tableName, fieldName, id) {
    const statement = `SELECT COUNT(*) totalCount FROM ${tableName} WHERE ${fieldName} = ?`
    const [result] = await promisePool.execute(statement, [id])
    return result.pop().totalCount
  }

  async getListCountByTwo(tableName, k1, v1, k2, v2) {
    const statement = `SELECT COUNT(*) totalCount FROM ${tableName} WHERE ${k1} = ? AND ${k2} = ?`
    const [result] = await promisePool.execute(statement, [v1, v2])
    return result.pop().totalCount
  }
}

module.exports = new PublicService()
