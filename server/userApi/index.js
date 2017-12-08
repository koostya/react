exports.userApi = function (router) {
    const User = require('../models/User')
    const Item = require('../models/Item')
    
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
}