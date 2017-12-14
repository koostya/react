import fetch from 'isomorphic-fetch'
import { history } from '../../index'

export function regisAPI(id, nickname, name, surname, phone, password) {
    return fetch('http://localhost:3001/users', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nickname: nickname,
            name: name,
            surname: surname,
            phone: phone,
            password: password
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        if(json.userAlreadyExist == true) {
            history.push('/registration')
            return
        } else {
            localStorage.setItem('user', json.nickname)
            localStorage.setItem('login', true)
            console.log(json)
            history.push('/list')   

            return json
        }
    })
}