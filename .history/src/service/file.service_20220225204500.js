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

  // 商品展示图
  async createDisplayPic(filename, mimetype, goodId) {
    const statement = `INSERT INTO display_pic (filename, mimetype, good_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      goodId
    ])
    return result
  }

  async createDetailPic(filename, mimetype, url, goodId) {
    const statement = `INSERT INTO t_detail_pic (filename, mimetype, pic_url, good_id) VALUES (?, ?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      url,
      goodId
    ])
    console.log(result)
    return result
  }

  async getGoodPicById(tableName, goodId) {
    const statement = `SELECT * FROM ${tableName} WHERE good_id = ?`
    console.log(statement);
    const [result] = await promisePool.execute(statement, [goodId])
    console.log(res);
    return result
  }
}

module.exports = new FileService()
