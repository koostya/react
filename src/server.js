const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

app.use(BodyParser())

router.get('/', function(ctx) {
    ctx.body = 'hello, world!'
})

router.get('/items', function(ctx) {
    ctx.body = 'items'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('server started')