const Multer = require('@koa/multer')

const { CATEGORY_ICON_PATH, TEST_PATH } = require('../constants/file-path')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})
const categoryIconHandler = categoryIconUpload.single('icon')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})

const testFileUpload = Multer({
  dest:TEST_PATH
})
const testImgHandler = testFileUpload.single('img')

module.exports = {
  categoryIconHandler,
  testImgHandler
}
