const Koa = require('koa')
const app = new Koa()

app.use(function(ctx) {
    ctx.body = 'hello, world!'
})

app.listen(3000)

console.log('server started')