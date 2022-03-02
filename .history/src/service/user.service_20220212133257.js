const promisePool = require('../app/database')

class UserService {
  async create(ctx) {
    // 初次登录，创建用户并存入数据库
    const statement = `INSERT INTO user (openid, isLogin, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?, ?)`

    promisePool.execute(statement)
  }

  async getUserByOpenid(openid) {
    const state
  }
}

module.exports = new UserService()