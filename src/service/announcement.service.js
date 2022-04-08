const promisePool = require('../app/database')

class AnnouncementService {
  async create(formData) {
    const { title, content } = formData
    const statement = `INSERT INTO announcement (title, content) VALUES (?, ?)`
    const [result] = await promisePool.execute(statement, [title, content])
    return result
  }
}

module.exports = new AnnouncementService()
