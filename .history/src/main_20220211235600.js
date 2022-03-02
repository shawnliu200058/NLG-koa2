const app = require('./app/index')
const config = require('./app/')

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa'
})


app.listen(8888, () => {
  console.log(`api server is running at http://127.0.0.1:${config.APP_PORT}`)
})