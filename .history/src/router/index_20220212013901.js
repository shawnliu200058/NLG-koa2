const fs = require('fs')

// 导出所有路由
// 此处用箭头函数会报错。this总是代表它的直接调用者(js的this是执行上下文), 例如 obj.func ,那么func中的this就是obj
const useRoutes = function () {
  // 遍历当前文件夹下的文件
  fs.readdirSync(__dirname).forEach((file) => {
    // index.js 文件无需导出
    if (file === 'index.js') return
    const router = require(`./${file}`)
    // this 指向 Koa 实例
    this.use(router.routes())
    this.use(router.allowedMethods())
  })
}

module.exports = useRoutes
