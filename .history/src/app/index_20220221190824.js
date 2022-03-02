const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const useRoutes = require('../router/index')
const errorHandler = require('./error-handler')

const app = new Koa()


app.useRoutes = useRoutes
// 解析 body 数据
app.use(bodyParser())
app.useRoutes()
app.on('error', errorHandler)

module.exports = app
