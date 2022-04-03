const fs = require('fs')

const { APP_HOST, APP_PORT } = require('../app/config')
const fileService = require('../service/file.service')
const categoryService = require('../service/category.service')
const goodService = require('../service/good.service')

class FileController {
  async saveCategoryIcon(ctx) {
    // console.log(ctx.isUpdateAction)
    const { filename, mimetype } = ctx.request.file
    // 获取分类 id
    const { categoryId } = ctx.params
    // console.log(ctx.isUpdateAction)
    // 若为更新图像操作
    if (ctx.isUpdateAction) {
      const result = await fileService.updateCategoryIcon(
        filename,
        mimetype,
        categoryId
      )
      const iconUrl = `${APP_HOST}:${APP_PORT}/category/${categoryId}/${filename}`
      // 将图像地址保存到 category 表中
      await categoryService.updateIconById(iconUrl, categoryId)
      return (ctx.body = { msg: '更新分类图标成功', categoryId })
    }
    // 插入图像信息数据到 category_icon 表中
    else {
      await fileService.createCategoryIcon(filename, mimetype, categoryId)
      const iconUrl = `${APP_HOST}:${APP_PORT}/category/${categoryId}/${filename}`
      // 将图像地址保存到 category 表中
      await categoryService.updateIconById(iconUrl, categoryId)
      ctx.body = '上传分类图标成功'
    }
  }

  async saveDisplayPic(ctx) {
    const { goodId } = ctx.params
    const { filename, mimetype } = ctx.request.file

    await fileService.createDisplayPic(filename, mimetype, goodId)

    const url = `${APP_HOST}:${APP_PORT}/good/${goodId}/display_pic`
    await goodService.updateGoodById(url, goodId)

    ctx.body = '上传商品展示图成功'
  }

  async saveDetailPic(ctx) {
    const { goodId } = ctx.params
    ctx.body = goodId
    const { filename, mimetype } = ctx.request.file
    console.log(goodId, filename, mimetype)
    const url = `${APP_HOST}:${APP_PORT}/good/${goodId}/detail_pic?filename=${filename}`
    await fileService.createDetailPic(filename, mimetype, url, goodId)
    ctx.body = '上传商品详情图片成功'
  }

  async saveTestFile(ctx) {
    const { goodId } = ctx.params
    const { filename, mimetype } = ctx.request.file
    console.log(goodId, filename, mimetype)

    // const url = `${APP_HOST}:${APP_PORT}/good/${goodId}/detail_pic?filename=${filename}`
    // console.log(url)
    // await fileService.createDetailPic(filename, mimetype, url, goodId)
    ctx.body = '上传测试图片成功'
  }

  async delTestFile(ctx) {
    // const delPath = `${path.resolve(__dirname, '..')}`
    // console.log(delPath)
    fs.unlink('uploads/test/76e865f60af3d8fd8fb5d38aaa6dc985', (err) => {
      if (err) throw err
      console.log('文件已删除')
      ctx.body = '文件已删除'
    })
  }
}

module.exports = new FileController()
