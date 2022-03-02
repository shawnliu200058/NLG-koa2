const Router = require('@koa/router')

const {categoryIconHandler} = require('../middleware/file.middleware')
const {} = require('../')

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

fileRouter.post('/categoryIcon', categoryIconHandler)

module.exports = fileRouter
