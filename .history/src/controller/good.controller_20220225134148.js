class GoodController {
  async getDetailPic(ctx) {
    const { categoryId } = ctx.params
    const iconInfo = await fileService.getCategoryIconById(categoryId)

    // 提供图像信息
    ctx.response.set('content-type', iconInfo.mimetype)
    ctx.body = fs.createReadStream(`${CATEGORY_ICON_PATH}/${iconInfo.filename}`)
  }
}

module.exports = new GoodController()