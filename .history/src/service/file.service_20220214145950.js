const promisePool = require('../app/database')

class FileService {
  async createCategoryIcon(filename, mimetypr, categoryId) {
    const statement = `INSERT INTO category_icon (filename, mimetype, category_id) VALUES (?, ?, ?)`
    const result = await promisePool.execute(statement)
  }
}