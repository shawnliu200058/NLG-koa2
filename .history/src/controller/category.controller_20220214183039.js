const categoryService = require('../service/category.service')
const fileService = require('../service/file.service')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await categoryService.create(name)
    ctx.body = result
  }

  async getIcon(ctx) {
    const { categoryId } = ctx.params
    const result = await fileService.getCategoryIconById(categoryId)

    // 提供图像信息
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

module.exports = new CategoryController()
