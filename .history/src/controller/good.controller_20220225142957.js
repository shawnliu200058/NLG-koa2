const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicByGoodId(ctx) {
    const { goodId } = ctx.params
    const picInfo = await fileService.getDetailPicById(goodId)

    ctx.body = picInfo
  }

  async getDetailPicByName(ctx) {
    
}

module.exports = new GoodController()
