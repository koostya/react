const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const serve = require('koa-static')

const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

const app = new Koa()
const router = new Router()
 
app.use(require("koa-webpack-dev-middleware")(compiler))

app.use(require("koa-webpack-hot-middleware")(compiler))

app.use(BodyParser())

app.use(serve('/home/gnom/workspace/react/mvcapp/public'))

app.listen(3000, function() {
    console.log('server started')
})

