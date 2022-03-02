const promisePool = require('../app/database')

class GoodService {
  async getGoodList() {
    const statement = 
      `SELECT good.id, good.name, good.displayPicUrl
	      JSON_ARRAYAGG(JSON_OBJECT('id', detail_pic.id, 'url', detail_pic.url)) detailPic
      FROM good LEFT JOIN detail_pic 
      ON good.id = t_detail_pic.good_id
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
