const fs = require('fs')

const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicByGoodId(ctx) {
    const { filename } = ctx.query
    const { goodId } = ctx.params
    const picInfo = await fileService.getDetailPicById(goodId)

    // 获取该商品下
    if (typeof filename === 'string' && goodId == picInfo[0].good_id) {
      // 提供图像信息
      ctx.response.set('content-type', 'image/png')
      return (ctx.body = fs.createReadStream(`${TEST_PATH}/${filename}`))
    }

    ctx.body = picInfo
  }

  async getDetailPicByName(ctx) {}
}

module.exports = new GoodController()
