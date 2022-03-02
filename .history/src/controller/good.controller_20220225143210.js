const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicByGoodId(ctx) {
    const { filename } = ctx.query
    console.log(filename)

    if(typeof) {
      // 提供图像信息
      ctx.response.set('content-type', 'image/png')
      return ctx.body = fs.createReadStream(`${TEST_PATH}/${filename}`)
    }

    const { goodId } = ctx.params
    const picInfo = await fileService.getDetailPicById(goodId)

    ctx.body = picInfo
  }

  async getDetailPicByName(ctx) {
    
  }
}

module.exports = new GoodController()
