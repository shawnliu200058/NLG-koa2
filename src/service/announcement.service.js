const promisePool = require('../app/database')

class AnnouncementService {
  async create(formData) {
    const { title, content } = formData
    const statement = `UPDATE announcement SET title = ?, content = ? WHERE id = 2`
    const [result] = await promisePool.execute(statement, [title, content])
    // console.log(result)
    return result
  }

  async get() {
    const statement = `SELECT * FROM announcement`
    const [result] = await promisePool.execute(statement)
    return result.pop()
  }
}

module.exports = new AnnouncementService()
