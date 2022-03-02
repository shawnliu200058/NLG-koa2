const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const useRoutes = require('../router/index')
const errorHandler = require('./error-handler')

const app = new Koa()

app.useRoutes = useRoutes
// 解析 body 数据
app.use(bodyParser())
app.useRoutes()
app.on

module.exports = app
