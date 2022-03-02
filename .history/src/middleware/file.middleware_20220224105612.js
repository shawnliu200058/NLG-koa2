const Multer = require('@koa/multer')

const { CATEGORY_ICON_PATH, DETAIL_PIC_PATH, TEST_PATH } = require('../constants/file-path')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})
const categoryIconHandler = categoryIconUpload.single('icon')

const detailPicUpload = Multer({
  dest: DETAIL_PIC_PATH
})
const detailPicHandler = detailPicUpload.array('detailPic', 9)

const testFileUpload = Multer({
  dest:TEST_PATH
})
const testImgHandler = testFileUpload.single('img')

module.exports = {
  categoryIconHandler,
  detailP
  testImgHandler
}
