const promisePool = require('../app/database')

class FileService {
  async createCategoryIcon(filename, mimetype, categoryId) {
    const statement = `INSERT INTO category_icon (filename, mimetype, category_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      categoryId
    ])
    return result
  }

  async getCategoryIconById(categoryId) {
    const statement = `SELECT * FROM category_icon WHERE category_id = ?;`
    const [result] = await promisePool.execute(statement, [categoryId])
    return result.pop()
  }

  async createDetailPic(filename, mimetype, url, goodId) {
    const statement = `INSERT INTO t_detail_pic (filename, mimetype, pic_url, good_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      url,
      goodId
    ])
    cons
    return result
  }

  async getDetailPicById(goodId) {
    const statement = `SELECT * FROM t_detail_pic WHERE good_id = ?;`
    const [result] = await promisePool.execute(statement, [goodId])
    return result
  }
}

module.exports = new FileService()
