const promisePool = require('../app/database')

class UserService {
  async create(userInfo, openid) {
    const {nickName}
    // 初次登录，创建用户并存入数据库
    const statement = `INSERT INTO user (openid, isLogin, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?, ?)`

    promisePool.execute(statement)
  }

  async getUserByOpenid(openid) {
    const statement = `SELECT * FROM user where openid = ?`
    const [result] = promisePool.execute(statement, [openid])

    return result
  }
}

module.exports = new UserService()