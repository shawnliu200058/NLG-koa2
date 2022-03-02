const Router = require('@koa/router')

const { categoryIconHandler, detailPicHandler, testImgHandler } = require('../middleware/file.middleware')
const { saveCategoryIcon, saveDetailPic, saveTestFile } = require('../controller/file.controller')

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
fileRouter.post('/categoryIcon', categoryIconHandler, saveCategoryIcon)
// 上传商品详情图
fileRouter.post('/detailPic', detailPicHandler, saveDetailPic)

fileRouter.post('/test/:', testImgHandler, saveTestFile)

module.exports = fileRouter
