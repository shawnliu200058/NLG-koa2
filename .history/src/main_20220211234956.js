const app = require('./app/')

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)