const { APP_HOST, APP_PORT } = require('../app/config')
const fileService = require('../service/file.service')

class FileController {
  async saveCategoryIcon(ctx) {
    const { filename, mimetype } = ctx.request.file
    // 获取分类 id
    const { id } = ctx.request.body

    // 2.将图像信息数据保存到 category_icon 表中
    const result = await fileService.createCategoryIcon(filename, mimetype)

    const iconUrl = `${APP_HOST}:${APP_PORT}/category/${id}/icon`
  }
}
