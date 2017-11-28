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

router.post("/items", (ctx) => {
    let body = JSON.parse(ctx.request.body)
    let item = new Item({
        id: body.id,
        text: body.text,
        completed: body.completed,
        editing: body.editing
    })

    item.save()

    ctx.response.body = ctx.request.body
})

router.get("/items", async (ctx) => {
    await Item.find(function(err, items) { 
        ctx.response.body = items
    })
})

router.delete("/items/:id", async (ctx) => {
    let body = JSON.parse(ctx.request.body)

    if(!body.deleteManyItems) {
        await Item.remove({'id':body.id}, function(err) { 
            console.log('Item was removed')
        })
    } else {
        await Item.remove({'completed':true}, function(err) { 
            console.log('Items were removed')
        })
    }
})

router.put("/items/:id", async (ctx) => {
    let body = JSON.parse(ctx.request.body)

    await Item.update({'id': body.id}, {$set: {'completed': body.completed, 'text': body.text}}, function(err, items) {
        console.log('Item was updated')
    })

    ctx.body = ctx.request.body
})

router.put("/items", async (ctx) => {
    let body = JSON.parse(ctx.request.body)

    await Item.update({'completed': !body.allChecked}, {$set: {'completed': body.allChecked}}, {multi: true}, function(err, items) {
        console.log('Items were updated')
    })

    ctx.body = ctx.request.body
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, function() {
    console.log('Server started')
})

