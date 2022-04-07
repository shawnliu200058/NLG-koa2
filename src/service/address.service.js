const promisePool = require('../app/database')

class AddressService {
  async updateDefaultAddress(isDefault, user_id) {
    // 若新加入的地址为默认地址
    if (isDefault) {
      const setDefaultStatement = `UPDATE delivery_address SET isDefault = 0 WHERE isDefault = 1 && user_id = ?`
      const [result] = await promisePool.execute(setDefaultStatement, [user_id])
    }
  }

  async create(addressInfo, userId) {
    const { realName, phone, address, house, isDefault } = addressInfo

    // console.log(addressInfo)

    // 若新加入的地址为默认地址
    await this.updateDefaultAddress(isDefault, userId)

    const statement = `INSERT INTO delivery_address (realName, phone, address, isDefault, house, user_id) VALUES (?, ?, ?, ?, ?, ?) `
    const [result] = await promisePool.execute(statement, [
      realName,
      phone,
      address,
      isDefault,
      house,
      userId
    ])

    return result
  }

  async get(userId = null) {
    // console.log(userId)
    if (userId) {
      const statement = `SELECT * FROM delivery_address WHERE user_id = ?`
      const [result] = await promisePool.execute(statement, [userId])
      // console.log(result)
      return result
    } else {
      const statement = `SELECT * FROM delivery_address`
      const [result] = await promisePool.execute(statement)
      return result
    }
  }

  async modify(addressInfo, addressId) {
    console.log(addressInfo, addressId)
    const { realName, phone, address, house, isDefault } = addressInfo

    const getUserId = `SELECT user_id FROM delivery_address WHERE id = ?`
    const [result1] = await promisePool.execute(getUserId, [addressId])
    const user_id = result1.pop().user_id

    // 若需要设置新的默认地址
    await this.updateDefaultAddress(isDefault, user_id)

    const statement = `UPDATE delivery_address SET realName = ?, phone = ?, address = ?, house = ?, isDefault = ? WHERE id = ?`
    const [result2] = await promisePool.execute(statement, [
      realName,
      phone,
      address,
      house,
      isDefault,
      addressId
    ])
    // console.log(result2)

    return result2
  }

  async delete(addressId) {
    const statement = `DELETE FROM delivery_address WHERE id = ?`
    const [result] = await promisePool.execute(statement, [addressId])
    return result
  }

  // async getUserIdByAddressId(id) {
  //   return new Promise((resolve, reject) => {
  //     console.log(id)
  //     const statement = `SELECT user_id FROM delivery_address WHERE id = ?`
  //     const [result] = promisePool.execute(statement, [id])
  //     const userId = result.pop().user_id
  //     resolve(userId)
  //   }).catch(err => {
  //     reject(err)
  //   })
  // }
}

module.exports = new AddressService()
