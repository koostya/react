const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-body-parser')
const serve = require('koa-static')
const historyApiFallback = require('koa-history-api-fallback')

const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

const app = new Koa()
const router = new Router()

const Item = require('./models/Item')
const User = require('./models/User')

const connection = require("./connection")
const db = connection.db
 
app.use(require("koa-webpack-dev-middleware")(compiler))
app.use(require("koa-webpack-hot-middleware")(compiler))

app.use(BodyParser())
app.use(serve('./public'))
app.use(historyApiFallback({
    index: '/index.html',
    list: '/index.html'
}))

router.post("/item", async (ctx) => {
    let body = JSON.parse(ctx.request.body)

    let item = new Item({
        id: body.id,
        text: body.text,
        completed: body.completed,
        editing: body.editing,
        userName: body.userName
    })

    item.save()

    ctx.response.body = ctx.request.body
})

// router.get("/list", async (ctx) => {
//     console.log('list')
// })

router.get("/list/:name", async (ctx) => {
    let name = ctx.request.query.name,
        resBody = {}
    console.log(ctx.request.query.name)
    await Item.find({userName: name}, function(err, items) {
        // console.log(items)
        resBody.items = items
        resBody.logged = true

        console.log(resBody)

        // ctx.response.body = JSON.stringify(resBody)
        // serve('./public/list.html')
        ctx.redirect('/list.html')
    })
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

    ctx.response.body = ctx.request.body
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

router.post("/user", async (ctx) => {
    let reqBody = JSON.parse(ctx.request.body)

    await User.find({name: reqBody.name}, function(err, users) {
        if(users.length == 0) {
            let user = new User({
                id: reqBody.id,
                name: reqBody.name,
                password: reqBody.password
            })
        
            user.save()

            reqBody.items = []
            reqBody.logged = true

            ctx.response.body = reqBody
        } else {
            reqBody.logged = true
    
            ctx.redirect('/list/:name?name=' + reqBody.name)
        }
    })
})

// router.get("/user/items/${userID}", async (ctx) => {
//     // let reqBody = JSON.parse(ctx.request.body)
//     cosnole.log(ctx.request.query)

//     await Item.find({userID: reqBody.userID}, function(err, items) {
//         reqBody.items = items
//         reqBody.logged = true

//         console.log(reqBody)

//         ctx.response.body = reqBody
//     })
// })

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, function() {
    console.log('Server started')
})

