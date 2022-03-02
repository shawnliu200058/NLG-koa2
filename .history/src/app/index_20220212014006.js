const Koa = require('koa')

const useRoutes = require('../router/index')

const app = new Koa()

app.useRoutes = useRoutes

module.exports = app
