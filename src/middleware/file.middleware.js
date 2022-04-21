const Multer = require('@koa/multer')
const fs = require('fs')

const fileService = require('../service/file.service')

const {
  CATEGORY_ICON_PATH,
  DETAIL_PIC_PATH,
  DISPLAY_PIC_PATH,
  AVATAR_PATH,
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

const avatarPicUpload = Multer({
  dest: AVATAR_PATH
})
const avatarPicHandler = avatarPicUpload.single('avatar')

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
    ctx.isUpdateAction = 1
  }
  // next 前面记得加 await
  await next()
}

const delGoodPic = async (ctx, next) => {
  const { goodId } = ctx.params
  console.log(ctx.query)
  const { isDelDetailPic } = ctx.query
  // console.log(goodId)
  const displayPic = await fileService.getGoodPicById('display_pic', goodId)
  const detailPic = await fileService.getGoodPicById('detail_pic', goodId)
  // console.log(displayPic, detailPic)
  if (displayPic.length) {
    const displayFilename = displayPic[0].filename
    // console.log(displayFilename)
    fs.unlink(`uploads/displayPic/${displayFilename}`, (err) => {
      if (err) throw err
      console.log('展示图文件已删除')
    })
    await fileService.delFilename('display_pic', 'good_id', goodId)
  }

  if (detailPic.length && Number(isDelDetailPic)) {
    detailPic.forEach((item) => {
      // console.log(item.filename)
      fs.unlink(`uploads/detailPic/${item.filename}`, (err) => {
        if (err) throw err
        console.log('详情图文件已删除')
      })
    })
    await fileService.delFilename('detail_pic', 'good_id', goodId)
  }
  await next()
}

const delAvatar = async (ctx, next) => {
  const { userId } = ctx.params
  const result = await fileService.getAvatarById(userId)
  // console.log(result)
  if (result) {
    const { filename } = result
    fs.unlink(`uploads/avatar/${filename}`, (err) => {
      if (err) throw err
      console.log('原头像文件已删除')
    })
    // await fileService.delFilename('avatar_pic', 'user_id', userId)
    ctx.isUpdateAction = 1
  }
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
  avatarPicHandler,
  delOldFile,
  delGoodPic,
  delAvatar,
  testImgHandler
}
