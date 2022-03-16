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

    // 模糊查询
    if (queryInfo.hasOwnProperty('nickName')) {
      // console.log(queryInfo)
      const { nickName, gender } = queryInfo
      // limit 和 offset 要为 string 类型
      const statement = `SELECT * FROM user WHERE nickName LIKE ? AND gender = ? LIMIT ? OFFSET ?`
      const [result] = await promisePool.execute(statement, [
        `%${nickName}%`,
        gender,
        `${limit}`,
        `${offset}`
      ])
      return result
    }

    // 获取所有用户信息
    // limit 和 offset 要为 string 类型
    const statement = `SELECT * FROM user LIMIT ? OFFSET ?`
    const [result] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])

    return result
  }

  // 编辑用户信息
  async updateInfo(userId, updateInfo) {
    // console.log(userId, updateInfo)
    const { nickName, gender } = updateInfo

    const statement = `UPDATE user SET nickName = ?, gender = ? WHERE id = ?`
    const [result] = await promisePool.execute(statement, [
      nickName,
      gender,
      userId
    ])
    // console.log(result)
    return result
  }

  // async getUserByKeyword(queryInfo) {
  //   // console.log(queryInfo)
  //   const { id, nickName, gender } = queryInfo

  //   const statement = `SELECT * FROM user WHERE id LIKE ? AND nickName LIKE ? AND gender LIKE ?`
  //   const [result] = await promisePool.execute(statement, [
  //     `%${id}%`,
  //     `%${nickName}%`,
  //     `%${gender}%`
  //   ])
  //   console.log(result)
  //   return result
  // }
}

module.exports = new UserService()
