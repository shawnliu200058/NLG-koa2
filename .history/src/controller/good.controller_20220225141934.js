const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicList(ctx) {
    const { goodId } = ctx.params
    // const { filename } = ctx.query
    const picInfo = await fileService.getDetailPicById(goodId)

    
  }

  async getDetailPicByName(ctx) {
    const { filename } = ctx.query
  }
}

module.exports = new GoodController()
