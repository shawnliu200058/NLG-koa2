const { APP_HOST, APP_PORT } = require('../app/config')
const fileService = require('../service/file.service')
const categoryService = require('../service/category.service')

class FileController {
  async saveCategoryIcon(ctx) {
    const { filename, mimetype } = ctx.request.file
    // 获取分类 id
    const { categoryId } = ctx.request.body

    console.log(categoryId, filename, mimetype)

    // 将图像信息数据保存到 category_icon 表中
    await fileService.createCategoryIcon(filename, mimetype, categoryId)

    const iconUrl = `${APP_HOST}:${APP_PORT}/category/${categoryId}/icon`
    // 将图像地址保存到 category 表中
    await categoryService.updateIconById(iconUrl, categoryId)

    ctx.body = '上传分类图标成功'
  }

  async saveDetailPic(ctx) {
    ctx.body = {
      msg: '上传商品详情图成功',
      data: ctx.request.file
    }
  }

  async saveTestFile(ctx) {
    const { goodId } = ctx.params
    const { filename, mimetype } = ctx.request.file

    const url = `${APP_HOST}:${APP_PORT}/good/${goodId}?filename=${filename}`
    await fileService.createDetailPic(file)
    ctx.body = '上传测试图片成功'
  }
}

module.exports = new FileController()
