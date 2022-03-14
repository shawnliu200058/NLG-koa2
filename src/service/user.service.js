const promisePool = require('../app/database')

class UserService {
  async create(userInfo, openid) {
    const { nickName, gender, avatarUrl } = userInfo
    // 初次登录，创建用户并存入数据库
    const statement = `INSERT INTO user (openid, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?)`

    const [result] = await promisePool.execute(statement, [
      openid,
      nickName,
      gender,
      avatarUrl
    ])

    return result
  }

  async getUserByOpenid(openid) {
    const statement = `SELECT * FROM user where openid = ?`
    const [result] = await promisePool.execute(statement, [openid])
    return result.pop()
  }

  async getList(queryInfo) {
    const { offset, limit } = queryInfo
    // limit 和 offset 要为 string 类型
    const statement = `SELECT * FROM user LIMIT ? OFFSET ?`
    const [result] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])
    return result
  }
}

module.exports = new UserService()
