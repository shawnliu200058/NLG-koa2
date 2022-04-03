const Multer = require('@koa/multer')
const fs = require('fs')

const fileService = require('../service/file.service')

const {
  CATEGORY_ICON_PATH,
  DETAIL_PIC_PATH,
  DISPLAY_PIC_PATH,
  TEST_PATH
} = require('../constants/file-path')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})
const categoryIconHandler = categoryIconUpload.single('img')

const displayPicUpload = Multer({
  dest: DISPLAY_PIC_PATH
})
const displayPicHandler = displayPicUpload.single('displayPic')

const detailPicUpload = Multer({
  dest: DETAIL_PIC_PATH
})
const detailPicHandler = detailPicUpload.single('detailPic')

const delOldFile = async (ctx, next) => {
  // console.log(ctx.request.url.includes('category'))
  const { categoryId } = ctx.params
  const iconInfo = await fileService.getCategoryIconById(categoryId)
  console.log(iconInfo)
  if (iconInfo) {
    const { filename } = iconInfo
    console.log(filename)
    fs.unlink(`uploads/categoryIcon/${filename}`, (err) => {
      if (err) throw err
      console.log('文件已删除')
    })
  }
  ctx.isUpdateAction = 1
  // next 前面记得加 await
  await next()
}

const testFileUpload = Multer({
  dest: TEST_PATH
})
const testImgHandler = testFileUpload.single('img')

module.exports = {
  categoryIconHandler,
  displayPicHandler,
  detailPicHandler,
  delOldFile,
  testImgHandler
}
