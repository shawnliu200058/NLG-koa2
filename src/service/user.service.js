const promisePool = require('../app/database')

const publicService = require('./public/public.service')

class UserService {
  // async create(userInfo, openid) {
  //   const { nickName, gender, avatarUrl } = userInfo
  //   // 初次登录，创建用户并存入数据库
  //   const statement = `INSERT INTO user (openid, nickName, gender, avatarUrl) VALUES (?, ?, ?, ?)`

  //   const [result] = await promisePool.execute(statement, [
  //     openid,
  //     nickName,
  //     gender,
  //     avatarUrl
  //   ])

  //   return result
  // }

  async create(user) {
    console.log(user)
    const { name, password } = user
    const statement = `INSERT INTO user (nickName, password) VALUES (?, ?)`
    const [result] = await promisePool.execute(statement, [name, password])

    return result
  }

  async getUserByName(name) {
    // console.log(name)
    const statement = `SELECT * FROM user WHERE nickName = ?`
    const [result] = await promisePool.execute(statement, [name])
    // console.log(result)
    return result
  }

  async getUserById(id) {
    const statement = `SELECT * FROM user WHERE id = ?`
    const [result] = await promisePool.execute(statement, [id])
    return result.pop()
  }

  async getList(queryInfo) {
    const { offset, limit } = queryInfo

    // 模糊查询
    if (queryInfo.hasOwnProperty('nickName')) {
      // console.log(queryInfo)
      const { nickName, gender } = queryInfo
      // console.log(nickName, gender)
      // limit 和 offset 要为 string 类型
      const statement = `SELECT * FROM user WHERE nickName LIKE ? AND gender LIKE ? LIMIT ? OFFSET ?`
      const [list] = await promisePool.execute(statement, [
        `%${nickName}%`,
        `%${gender}%`,
        `${limit}`,
        `${offset}`
      ])

      const statement2 = `SELECT COUNT(*) totalCount FROM user WHERE nickName LIKE ? AND gender LIKE ?`
      const [res] = await promisePool.execute(statement2, [
        `%${nickName}%`,
        `%${gender}%`
      ])
      // console.log(res[0].totalCount)

      return { userList: { totalCount: res[0].totalCount, list } }
    }

    // 获取所有用户信息
    // limit 和 offset 要为 string 类型
    const statement = `SELECT * FROM user LIMIT ? OFFSET ?`
    const [list] = await promisePool.execute(statement, [
      `${limit}`,
      `${offset}`
    ])

    const totalCount = await publicService.getListCount('user')
    // console.log(res)
    return { userList: { totalCount, list } }
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
