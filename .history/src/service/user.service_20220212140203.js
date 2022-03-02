const promisePool = require('../app/database')

class UserService {
  async create(userInfo, openid) {
    const { nickName, gender, avatarUrl } = userInfo
    // 初次登录，创建用户并存入数据库
    const statement = `INSERT INTO user (openid, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?)`

    const [result] = promisePool.execute(statement, [
      openid,
      nickName,
      gender,
      avatarUrl
    ])

    return result
  }

  async getUserByOpenid(openid) {
    const statement = `SELECT * FROM user where openid = ?`
    const [result] = promisePool.execute(statement, [openid])
    console.log(result);
    return result
  }
}

module.exports = new UserService()
