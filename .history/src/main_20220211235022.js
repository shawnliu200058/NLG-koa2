const app = require('./app/index')

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa'
})

app.listen(8888, () => {
  console.log()
})