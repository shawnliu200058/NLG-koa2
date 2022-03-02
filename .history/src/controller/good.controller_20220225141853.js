const fileService = require('../service/file.service')
const { TEST_PATH } = require('../constants/file-path')

class GoodController {
  async getDetailPicList(ctx) {
    const { goodId } = ctx.params
    // const { filename } = ctx.query
    const picInfo = await fileService.getDetailPicById(goodId)

    // 提供图像信息
    // ctx.response.set('content-type', 'image/png')
    // ctx.body = fs.createReadStream(`${TEST_PATH}/${filename}`)
  }

  async getDetailPic
}

module.exports = new GoodController()
