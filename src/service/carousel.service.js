const promisePool = require('../app/database')

class CarouselService {
  async get(queryInfo) {
    const { offset, limit } = queryInfo
    const statement = `SELECT * FROM carousel LIMIT ? OFFSET ?`

    const [result] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])
    // console.log(result)
    return result
  }
}

module.exports = new CarouselService()
