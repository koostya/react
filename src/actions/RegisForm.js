import { send } from '../utils/fetch'
import { history } from '../index'
import {  
    REGISTRATION_ERR,
    REGISTRATION
} from './CONSTS'

export function submitFormRegis(id, nickname, name, surname, phone, password) { 
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
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
            console.log(json.userAlreadyExist)
            if(json.userAlreadyExist == true) {
                history.push('/registration') 
                
                dispatch({
                    type: REGISTRATION_ERR,
                    body: json
                })
            } else {
                localStorage.setItem('user', json.nickname)
                localStorage.setItem('login', true)
    
                history.push('/list')   
    
                dispatch({
                    type: REGISTRATION,
                    body: json
                })
            }
        })
    }
}