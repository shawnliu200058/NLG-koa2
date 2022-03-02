const promisePool = require('../app/database')

class CategoryService {
async create(name) {
  const statement = `INSERT INTO category (name) VALUES (?)`
  const [result] = await promisePool.execute(statement, [name])
  return result
}

async getList() {
  const statement = 
  `SELECT category.id, category.name, category.icon_url,
	JSON_ARRAYAGG(JSON_OBJECT('id', good.id, 'name', good.name)) goods
FROM category LEFT JOIN good 
ON good.category_id = category.id
GROUP BY category.id`
  const [result] = await promisePool.execute(statement)
  return result
}

  async updateIconById(iconUrl, categoryId) {
    const statement = `UPDATE category SET icon_url = ? WHERE id = ?;`
    const [result] = await promisePool.execute(statement, [iconUrl, categoryId])
    return result
  }
}

module.exports = new CategoryService()