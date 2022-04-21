const Router = require('@koa/router')

const {
  categoryIconHandler,
  detailPicHandler,
  displayPicHandler,
  avatarPicHandler,
  delOldFile,
  delAvatar,
  testImgHandler,
  delGoodPic
} = require('../middleware/file.middleware')
const {
  saveCategoryIcon,
  saveDisplayPic,
  saveDetailPic,
  saveTestFile,
  saveAvatar,
  delTestFile
} = require('../controller/file.controller')

// const { verifyAuth } = require('../middleware/auth.middleware')
// const {
//   avatarHandler,
//   pictureHandler,
//   pictureResize
// } = require('../middleware/file.middleware')
// const {
//   saveAvatarInfo,
//   savePictureInfo
// } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/upload' })

// 上传分类图标
fileRouter.post(
  '/categoryIcon/:categoryId',
  categoryIconHandler,
  saveCategoryIcon
)
// 更新分类图标
fileRouter.patch(
  '/categoryIcon/:categoryId',
  delOldFile,
  categoryIconHandler,
  saveCategoryIcon
)
// 上传商品展示图
fileRouter.post(
  '/displayPic/:goodId',
  delGoodPic,
  displayPicHandler,
  saveDisplayPic
)
// 上传商品详情图
fileRouter.post('/detailPic/:goodId', detailPicHandler, saveDetailPic)
// 上传用户头像
fileRouter.post('/avatar/:userId', delAvatar, avatarPicHandler, saveAvatar)
// // 更新用户发布商品图片
// fileRouter.patch(
//   '/goodPic/:goodId',
//   delGoodPic,
//   displayPicHandler,
//   saveDisplayPic,
//   detailPicHandler,
//   saveDetailPic
// )

fileRouter.post('/test/:goodId', testImgHandler, saveTestFile)
// 删除测试文件接口
fileRouter.delete('/test', delTestFile)

module.exports = fileRouter
