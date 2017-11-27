const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-body-parser')
const serve = require('koa-static')

const webpack = require('webpack')
const webpackConfig = require('/home/gnom/workspace/react/mvcapp/webpack.config.js')
const compiler = webpack(webpackConfig)

const app = new Koa()
const router = new Router()

const Item = require('./models/Item')

const connection = require("./connection")
const db = connection.db
 
app.use(require("koa-webpack-dev-middleware")(compiler))
app.use(require("koa-webpack-hot-middleware")(compiler))
app.use(BodyParser())
app.use(serve('/home/gnom/workspace/react/mvcapp/public'))

router.post("/a", (ctx) => {
    let body = JSON.parse(ctx.request.body)
    let item = new Item({
        text: body.text
    })
    item.save()
    console.log('body', body.text)
    ctx.response.body = ctx.request.body
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, function() {
    console.log('Server started')
})

