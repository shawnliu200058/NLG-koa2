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

  async updateCategoryIcon(filename, mimetype, categoryId) {
    const statement = `UPDATE category_icon SET filename = ?, mimetype = ? WHERE category_id = ?`
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
    // console.log(goodId, filename, url, mimetype)
    const statement = `INSERT INTO detail_pic (filename, mimetype, url, good_id) VALUES (?, ?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      url,
      goodId
    ])
    return result
  }

  async createAvatar(filename, mimetype, userId) {
    // console.log(filename, mimetype)
    const statement = `INSERT INTO avatar_pic (filename, mimetype, user_id) VALUES (?, ?, ?)`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      userId
    ])
    return result
  }

  async updateAvatar(filename, mimetype, userId) {
    const statement = `UPDATE avatar_pic SET filename = ?, mimetype = ? WHERE user_id = ?`
    const [result] = await promisePool.execute(statement, [
      filename,
      mimetype,
      userId
    ])
    return result
  }

  async getGoodPicById(tableName, goodId) {
    const statement = `SELECT * FROM ${tableName} WHERE good_id = ?`
    const [result] = await promisePool.execute(statement, [goodId])
    return result
  }

  async delFilename(tableName, fkName, id) {
    const statement = `DELETE FROM ${tableName} WHERE ${fkName} = ?`
    const [result] = await promisePool.execute(statement, [id])
    return result
  }

  async getAvatarById(userId) {
    const statement = `SELECT * FROM avatar_pic WHERE user_id = ?`
    const [result] = await promisePool.execute(statement, [userId])
    return result.pop()
  }
}

module.exports = new FileService()
