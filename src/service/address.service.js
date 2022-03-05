const promisePool = require('../app/database')

class AddressService {
  async create(addressInfo) {
    const { realName, phone, address, house, isDefault, user_id } = addressInfo

    // 若新加入的地址为默认地址
    if (isDefault) {
      const setDefaultStatement = `UPDATE delivery_address SET isDefault = 0 where user_id = ?`
      await promisePool.execute(setDefaultStatement, [user_id])
    }

    const statement = `INSERT INTO delivery_address (realName, phone, address, isDefault, house, user_id) VALUES (?, ?, ?, ?, ?, ?) `
    const [result] = await promisePool.execute(statement, [
      realName,
      phone,
      address,
      isDefault,
      house,
      user_id
    ])

    return result
  }

  async get() {
    const statement = `SELECT * FROM delivery_address`
    const [result] = await promisePool.execute(statement)
    return result
  }
}

module.exports = new AddressService()
