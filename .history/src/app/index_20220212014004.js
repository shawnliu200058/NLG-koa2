const Koa = require('koa')

const useRoutes = require('../router/index')

const app = new Koa()

app.useRoutes = use

module.exports = app
