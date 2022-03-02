const { APP_HOST, APP_PORT } = require('../app/config')
const fileService = require('../service/file.service')
const categoryService = require('../service/category.service')
const goodService = require('../service/good.service')

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
    const { goodId } = ctx.params
    const { filename, mimetype } = ctx.request.file

    await fileService.createDisplayPic(filename, mimetype, goodId)

    const url = `${APP_HOST}:${APP_PORT}/good/${goodId}/dispaly_pic?filename`

    await goodService.updateGoodById(url)
    ctx.body = '上传测试图片成功'
  }

  // async saveTestFile(ctx) {
  //   const { goodId } = ctx.params
  //   const { filename, mimetype } = ctx.request.file
  //   console.log(goodId, filename, mimetype)

  //   const url = `${APP_HOST}:${APP_PORT}/good/${goodId}/detail_pic?filename=${filename}`
  //   console.log(url)
  //   await fileService.createDetailPic(filename, mimetype, url, goodId)
  //   ctx.body = '上传测试图片成功'
  // }
}

module.exports = new FileController()
