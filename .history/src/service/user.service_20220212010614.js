const promisePool = require('../app/database')

class UserService {
  async create(ctx) {
    
    const statement = `INSERT INTO user (openid, isLogin, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?, ?)`
  }
}