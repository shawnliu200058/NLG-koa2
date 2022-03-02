const {}

class GoodController {
  async getDetailPic(ctx) {
    const { goodId } = ctx.params
    const {filename} = ctx.query
    const picInfo = await fileService.getCategoryIconById(categoryId)

    // 提供图像信息
    ctx.response.set('content-type', picInfo.mimetype)
    ctx.body = fs.createReadStream(`${CATEGORY_ICON_PATH}/${iconInfo.filename}`)
  }
}

module.exports = new GoodController()