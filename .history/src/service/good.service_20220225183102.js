const promisePool = require('../app/database')

class GoodService {
  async getGoodList() {
    const statement = 
      `SELECT t_good.id, t_good.name,
	      JSON_ARRAYAGG(JSON_OBJECT('id', t_detail_pic.id, 'url', t_detail_pic.pic_url)) detailPic
      FROM t_good LEFT JOIN t_detail_pic 
      ON t_good.id = t_detail_pic.good_id
      GROUP BY t_good.id`

    const [result] = await promisePool.execute(statement)
    return result
  }

  async updateGoodById
}

module.exports = new GoodService()
