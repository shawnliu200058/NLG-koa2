const fs = require('fs')

const categoryService = require('../service/category.service')
const fileService = require('../service/file.service')
const { CATEGORY_ICON_PATH } = require('../constants/file-path')

class CategoryController {
  async create(ctx) {
    const { name } = ctx.request.body
    const result = await categoryService.create(name)
    ctx.body = result
  }

  async getList(ctx) {
    const result = await category
  }

  async getIcon(ctx) {
    const { categoryId } = ctx.params
    const iconInfo = await fileService.getCategoryIconById(categoryId)

    // 提供图像信息
    ctx.response.set('content-type', iconInfo.mimetype)
    ctx.body = fs.createReadStream(`${CATEGORY_ICON_PATH}/${iconInfo.filename}`)
  }
}

module.exports = new CategoryController()
