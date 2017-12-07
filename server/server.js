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

const Item = require('./models/Item')
const User = require('./models/User')

const connection = require("./connection")
const db = connection.db
 
app.use(require("koa-webpack-dev-middleware")(compiler))
app.use(require("koa-webpack-hot-middleware")(compiler))

app.use(BodyParser())
app.use(cors())

app.use(serve('./build'))

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

router.get("/list/user/:name", async (ctx) => {
    const name = ctx.request.query.name,
        resBody = {}

    const items = await Item.find({userName: name})
    
    resBody.items = items
    resBody.name = name

    ctx.response.body = resBody
})

router.get("/items", async (ctx) => {
    const items = await Item.find({})
    ctx.response.body = items
})

router.delete("/items/:id", async (ctx) => {
    const deleteManyItems = ctx.request.query.deleteManyItems,
        id = ctx.request.query.id,
        user = ctx.request.query.user

    if(Boolean(deleteManyItems)) {
        await Item.remove({'completed':true, "userName": user})
    } else if(!Boolean(deleteManyItems)){
        await Item.remove({'id':id})
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

    const users = await User.find({nickname: reqBody.name, password: reqBody.password})

    if(users.length == 0) {
        reqBody.noUserWasFound = true

        ctx.response.body = reqBody
    } else {
        const resBody = {}
        const items = await Item.find({userName: reqBody.name})

        resBody.noUserWasFound = false
        resBody.items = items
        resBody.logged = true
        resBody.name = reqBody.name

        ctx.response.body = resBody
    }
})

router.post("/users", async (ctx) => {
    let reqBody = JSON.parse(ctx.request.body)
    console.log(reqBody.nickname)

    const users = await User.find({nickname: reqBody.nickname})

    if(users.length === 0) {
        let user = new User({
            id: reqBody.id,
            nickname: reqBody.nickname,
            name: reqBody.name,
            surname: reqBody.surname,
            phone: reqBody.phone,
            password: reqBody.password
        })
    
        user.save()

        reqBody.items = []
        reqBody.userAlreadyExist = false
        reqBody.logged = true

        ctx.response.body = reqBody
    } else {
        reqBody.userAlreadyExist = true   

        ctx.response.body = reqBody
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (ctx) => {
    if(ctx.status === 404) {
        // console.log(ctx.query)
        ctx.redirect('/')
        await send(ctx, './build/index.html')
    }
})

app.listen(3001, function() {
    console.log(__dirname)
})

