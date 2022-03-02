const { APP_HOST, APP_PORT } = require('../app/config')
const fileService = require('../service/file.service')
const categoryService = require('../service/category.service')

class FileController {
  async saveCategoryIcon(ctx) {
    const { filename, mimetype } = ctx.request.file
    // 获取分类 id
    const { id } = ctx.request.body 

    console.log(id, filename, mimetype)

    // 将图像信息数据保存到 category_icon 表中
    await fileService.createCategoryIcon(filename, mimetype, id)

    const iconUrl = `${APP_HOST}:${APP_PORT}/category/${id}/icon`
    // 将图像地址保存到 category 表中
    await categoryService.updateIconById(iconUrl, id)

    ctx.body = '上传分类图标成功'
  }
}

module.exports = new FileController()
