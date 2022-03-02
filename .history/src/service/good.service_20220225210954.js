const promisePool = require('../app/database')

class GoodService {
  async getGoodList() {
    const statement = 
      `SELECT good.id, good.name, good.displayPic
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM t_good LEFT JOIN t_detail_pic 
      ON t_good.id = t_detail_pic.good_id
      GROUP BY t_good.id`

    const [result] = await promisePool.execute(statement)
    return result
  }

  async updateGoodById(displayPicUrl, goodId) {
    const statement = `UPDATE good SET displayPicUrl = ? WHERE id = ?;`
    const [result] = await promisePool.execute(statement, [displayPicUrl, goodId])
    return result
  }
}

module.exports = new GoodService()
