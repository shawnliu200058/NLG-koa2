const { APP_HOST, APP_PORT } = require('../app/config')

class FileController {
  async saveCategoryIcon(ctx) {
    const { filename, mimetype } = ctx.request.file
    // 获取分类 id
    const { id } = ctx.request.body

    const iconUrl = `${APP_HOST}:${APP_PORT}/category/${id}/icon`
  }
}
