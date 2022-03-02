const app = require('./app/index')
const config = require('./app/config')

require('./app/')

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa'
})


app.listen(config.APP_PORT, () => {
  console.log(`api server is running at http://127.0.0.1:${config.APP_PORT}`)
})