const promisePool = require('../app/database')

class UserService {
  async create(ctx) {
    // 初次登录
    const statement = `INSERT INTO user (openid, isLogin, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?, ?)`
  }
}