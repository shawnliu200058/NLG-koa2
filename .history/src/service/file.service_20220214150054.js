const promisePool = require('../app/database')

class FileService {
  async createCategoryIcon(filename, mimetype, categoryId) {
    const statement = `INSERT INTO category_icon (filename, mimetype, category_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      categoryId
    ])
    
    re
  }
}
