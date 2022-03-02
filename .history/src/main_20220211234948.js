const app = require

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)