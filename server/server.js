const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-body')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')

const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

const app = new Koa()
const router = new Router()

const connection = require("./connection")
const db = connection.db
 
app.use(require("koa-webpack-dev-middleware")(compiler))
app.use(require("koa-webpack-hot-middleware")(compiler))

app.use(BodyParser())
app.use(cors())
    
app.use(serve('./build'))

require('./itemApi/index').itemApi(router)
require('./userApi/index').userApi(router)

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (ctx) => {
    if(ctx.status === 404) {
        console.log('404')
        ctx.redirect('/')
        await send(ctx, './build/index.html')
    }
})

app.listen(3001, function() {
    console.log(__dirname)
})

