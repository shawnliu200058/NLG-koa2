const fs = require('fs')

const categoryService = require('../service/category.service')
const fileService = require('../service/file.service')
const { CATEGORY_ICON_PATH } = require('../constants/file-path')

class CategoryController {
  async create(ctx) {
    // console.log(ctx.request.body)
    const { name } = ctx.request.body
    const result = await categoryService.create(name)
    ctx.body = result
  }

  async getList(ctx) {
    // console.log(ctx.request.body)
    const result = await categoryService.getList(ctx.request.body)
    ctx.body = result
  }

  async getIcon(ctx) {
    // console.log(ctx.params)
    const { categoryId } = ctx.params
    const iconInfo = await fileService.getCategoryIconById(categoryId)
    // console.log(iconInfo)

    // 提供图像信息
    ctx.response.set('content-type', iconInfo.mimetype)
    ctx.body = fs.createReadStream(`${CATEGORY_ICON_PATH}/${iconInfo.filename}`)
  }

  async updateCategoryInfo(ctx) {
    const { id } = ctx.params
    const updateInfo = ctx.request.body
    // console.log(id, updateInfo)
    const result = await categoryService.updateInfo(id, updateInfo)
    // console.log(result)
    ctx.body = result
  }

  async delCategory(ctx) {
    const { categoryId } = ctx.params
    // console.log(id)
    const result = await categoryService.delInfo(categoryId)
    ctx.body = result
  }
}

module.exports = new CategoryController()
