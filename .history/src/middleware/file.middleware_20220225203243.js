const Multer = require('@koa/multer')

const { CATEGORY_ICON_PATH, DETAIL_PIC_PATH, DISPLAY_PIC_PATH, TEST_PATH } = require('../constants/file-path')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})
const categoryIconHandler = categoryIconUpload.single('icon')

const displayPicUpload = Multer({
  dest: DISPLAY_PIC_PATH
})
// 这里字段名不能写 display
const displayPicHandler = displayPicUpload.single('display_pic')

const detailPicUpload = Multer({
  dest: DETAIL_PIC_PATH
})
const detailPicHandler = detailPicUpload.single('detailPic')

const testFileUpload = Multer({
  dest:TEST_PATH
})
const testImgHandler = testFileUpload.single('img')

module.exports = {
  categoryIconHandler,
  displayPicHandler,
  detailPicHandler,
  testImgHandler 
}
