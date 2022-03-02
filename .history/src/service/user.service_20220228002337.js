const promisePool = require('../app/database')

class UserService {
  async createBy(userInfo, openid) {
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
}

module.exports = new UserService()
