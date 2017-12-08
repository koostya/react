exports.itemApi = function (router) {
    const User = require('../models/User')
    const Item = require('../models/Item')

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
            ctx.response.body = ctx.request.body
        } else if(!Boolean(deleteManyItems)){
            await Item.remove({'id':id})
            ctx.response.body = ctx.request.body
        }
    })
    
    router.put("/items/:id", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
    
        await Item.update({'id': body.id}, {$set: {'completed': body.completed, 'text': body.text}}, function(err, items) {
            console.log('Item was updated')
        })
    
        ctx.response.body = ctx.request.body
    })
    
    router.put("/items", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
    
        await Item.update({'completed': !body.allChecked}, {$set: {'completed': body.allChecked}}, {multi: true}, function(err, items) {
            console.log('Items were updated')
        })
    
        ctx.response.body = ctx.request.body
    })
}