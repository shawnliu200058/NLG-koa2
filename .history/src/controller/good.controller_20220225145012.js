const fs = require('fs')

const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicByGoodId(ctx) {
    const { goodId } = ctx.params
    // 获取该商品下的所有详情图
    const picInfo = await fileService.getDetailPicById(goodId)
    
    const { good_id, mimetype } = picInfo[0]

    // 获取该商品下单一详情图
    const { filename } = ctx.query
    // params 上的商品 id 要和数据库中的一致
    if (typeof filename === 'string' && goodId == good_id) {
      // 提供图像信息
      ctx.response.set('content-type', mimetype)
      return (ctx.body = fs.createReadStream(`${TEST_PATH}/${filename}`))
    }

    ctx.body = picInfo
  }

  async getDetailPicByName(ctx) {}
}

module.exports = new GoodController()
