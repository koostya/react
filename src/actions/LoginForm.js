import { send } from '../utils/fetch'
import { history } from '../index'
import { 
    SUBMIT_FORM_ERR,
    SUBMIT_FORM
} from './CONSTS'

export function submitForm(id, name, password) {
    return (dispatch) => {
        fetch('http://localhost:3001/user', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                password: password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if(json.noUserWasFound) {
                dispatch({
                    type: SUBMIT_FORM_ERR,
                    body: json
                })
            } else {
                localStorage.setItem('user', json.name)
                localStorage.setItem('login', true)
    
                history.push('/list')  

                dispatch({
                    type: SUBMIT_FORM,
                    body: json
                })
            } 
        })
    }
}