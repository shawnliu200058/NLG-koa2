const Multer = require('@koa/multer')

const { CATEGORY_ICON_PATH } = require('../constants/file-path')

const categoryIconUpload = Multer({
  dest: CATEGORY_ICON_PATH
})
const 
