import fetch from 'isomorphic-fetch'
import { history } from '../index'

export function loginAPI(id, nickname, password) {
    return fetch('http://localhost:3001/user', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nickname: nickname,
            password: password
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        if(json.noUserWasFound) {
            return
        } else {
            // console.log(json)
            localStorage.setItem('user', json.nickname)
            localStorage.setItem('login', true)
            console.log(json)
            
            history.push('/list')  

            return json
        } 
    })
}