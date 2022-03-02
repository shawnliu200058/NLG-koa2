const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const useRoutes = require('../router/index')
const console.error();

const app = new Koa()

app.useRoutes = useRoutes
// 解析 body 数据
app.use(bodyParser())
app.useRoutes()

module.exports = app
