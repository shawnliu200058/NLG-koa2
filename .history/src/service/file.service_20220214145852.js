const promisePool = require('../app/database')

class FileService {
  async createCategoryIcon(filename, mimetypr, categoryId) {
    const statement = `INSERT INTO category (filename, mimetype, category_id) `
  }
}