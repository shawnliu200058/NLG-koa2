const categoryService = require('../service/category.service')
const fileService = require('../service/file.service')
const {} = require('../constants/file-path')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await categoryService.create(name)
    ctx.body = result
  }

  async getIcon(ctx) {
    const { categoryId } = ctx.params
    const iconInfo = await fileService.getCategoryIconById(categoryId)

    // 提供图像信息
    ctx.response.set('content-type', iconInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

module.exports = new CategoryController()
